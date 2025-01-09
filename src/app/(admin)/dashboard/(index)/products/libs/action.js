"use server";
import { schemaProduct, schemaProductEdit } from "@/lib/schema";
import { redirect } from "next/navigation";
import { deleteFile, uploadBrandLogo } from "@/lib/supabase";
import { Schema } from "zod";

export async function storeProducts(_, formData) {
  const validate = schemaProduct.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    stock: formData.get("stock"),
    category_id: formData.get("category_id"),
    brand_id: formData.get("brand_id"),
    location_id: formData.get("location_id"),
    images: formData.getAll("images"),
  });

  if (!validate.success) {
    return {
      message: validate.error.errors[0].message,
    };
  }

  const uploaded_image = validate.data.images;
  const filenames = [];

  for (const image of uploaded_image) {
    const filename = await uploadBrandLogo(image, "products");
    filenames.push(filename);
  }

  try {
    await prisma.product.create({
      data: {
        name: validate.data.name,
        description: validate.data.description,
        category_id: Number.parseInt(validate.data.category_id),
        brand_id: Number.parseInt(validate.data.brand_id),
        location_id: Number.parseInt(validate.data.location_id),
        price: Number.parseInt(validate.data.price),
        stock: validate.data.stock,
        images: filenames,
      },
    });
  } catch (err) {
    console.error(err);
    return {
      message: "Failed to store product",
    };
  }

  return redirect("/dashboard/products");
}

export async function updateProduct(_, formData, id) {
  const validate = schemaProductEdit.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    stock: formData.get("stock"),
    category_id: formData.get("category_id"),
    brand_id: formData.get("brand_id"),
    location_id: formData.get("location_id"),
    id: id,
  });

  if (!validate.success) {
    return {
      message: validate.error.errors[0].message,
    };
  }

  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  if (!product) {
    return {
      message: "Product not found",
    };
  }

  const uploaded_image = formData.getAll("images");
  let filenames = [];

  if (uploaded_image.length > 2) {
    const parseImage = schemaProduct.pick({ images: true }).safeParse({
      images: uploaded_image,
    });

    if (!parseImage.success) {
      return {
        message: "Image not found",
      };
    }

    for (const image of uploaded_image) {
      const filename = await uploadBrandLogo(image, "products");
      filenames.push(filename);
    }
  } else {
    filenames = product.images;
  }

  try {
    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: validate.data.name,
        description: validate.data.description,
        category_id: Number.parseInt(validate.data.category_id),
        brand_id: Number.parseInt(validate.data.brand_id),
        location_id: Number.parseInt(validate.data.location_id),
        price: Number.parseInt(validate.data.price),
        stock: validate.data.stock,
        images: filenames,
      },
    });
  } catch (error) {
    return {
      message: "Error updating product",
    };
  }
  return redirect("/dashboard/products");
}

export async function deleteProduct(_, formData, id) {
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      images: true,
    },
  });

  if (!product) {
    return {
      message: "Product not found",
    };
  }

  try {
    for (const image of product.images) {
      await deleteFile(image, "products");
    }

    await prisma.product.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      message: "Error deleting product",
    };
  }
  return redirect("/dashboard/products");
}

"use server";

import { redirect } from "next/navigation";
import { brandSchema } from "@/lib/schema";
import { deleteFile, uploadBrandLogo } from "@/lib/supabase";

export async function postBrand(_, formData) {
  const validate = brandSchema.safeParse({
    name: formData.get("name"),
    logo: formData.get("logo"),
  });

  if (!validate.success) {
    return {
      message: validate.error.errors[0].message,
    };
  }

  try {
    const fileName = await uploadBrandLogo(validate.data.logo, "brands");
    await prisma.brand.create({
      data: {
        name: validate.data.name,
        logo: fileName,
      },
    });
  } catch (err) {
    console.error(err);
    return {
      message: "Failed to insert brand data",
    };
  }

  return redirect("/dashboard/brands");
}

export async function updateBrand(_, formData, id) {
  const logoFile = formData.get("logo");

  const validate = brandSchema.pick({ name: true }).safeParse({
    name: formData.get("name"),
  });

  if (!validate.success) {
    return {
      message: validate.error.errors[0].message,
    };
  }

  const brand = await prisma.brand.findFirst({
    where: {
      id: id,
    },
    select: {
      logo: true,
    },
  });

  let fileName = brand?.logo;

  if (logoFile.size > 0) {
    fileName = await uploadBrandLogo(logoFile, "brands");
  }

  try {
    await prisma.brand.update({
      where: {
        id: id,
      },
      data: {
        name: validate.data.name,
        logo: fileName,
      },
    });
  } catch (err) {
    console.log(err);
    return {
      message: "Failed to update your data",
    };
  }
  return redirect("/dashboard/brands");
}

export async function deleteBrand(_, formData, id) {
  console.log(id);

  const brand = await prisma.brand.findFirst({
    where: {
      id: id,
    },
    select: {
      logo: true,
    },
  });

  if (!brand) {
    return {
      message: "Brand not found",
    };
  }

  try {
    deleteFile(brand.logo, "brands");

    await prisma.brand.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
    return {
      message: "Failed to delete brand",
    };
  }

  return redirect("/dashboard/brands");
}

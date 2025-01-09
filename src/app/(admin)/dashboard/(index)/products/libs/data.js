import prisma from "@/lib/prisma";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        id: true,
        _count: {
          select: {
            orders: true,
          },
        },
        name: true,
        price: true,
        stock: true,
        created_at: true,
        category: {
          select: {
            name: true,
          },
        },
        brand: {
          select: {
            name: true,
          },
        },
        images: true,
      },
    });
    const response_product = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
        created_at: product.created_at,
        category: product.category.name,
        brand: product.brand.name,
        image_url: product.images[0],
        total_sales: product._count.orders,
      };
    });
    return response_product;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getProductsById(id) {
  try {
    const products = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    return products;
  } catch (error) {
    console.error("data product by id tidak ditemukan!");
    return [];
  }
}

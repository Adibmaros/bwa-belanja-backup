import prisma from "@/lib/prisma";
import { getImageUrl } from "@/lib/supabase";

export async function POST(request) {
  try {
    const res = await request.json();

    const ORQuery = [];

    if (res.search && res.search !== "") {
      ORQuery.push({
        name: {
          contains: res.search,
          mode: "insensitive",
        },
      });
    }

    if (res.minPrice && res.minPrice > 0) {
      ORQuery.push({
        price: {
          gte: res.minPrice,
        },
      });
    }

    if (res.maxPrice && res.maxPrice > 0) {
      ORQuery.push({
        price: {
          lte: res.maxPrice,
        },
      });
    }

    if (res.stock && res.stock.length > 0) {
      ORQuery.push({
        stock: {
          in: res.stock,
        },
      });
    }

    if (res.brands && res.brands.length > 0) {
      ORQuery.push({
        brand: {
          id: {
            in: res.brands,
          },
        },
      });
    }

    if (res.categories && res.categories.length > 0) {
      ORQuery.push({
        category: {
          id: {
            in: res.categories,
          },
        },
      });
    }

    if (res.locations && res.locations.length > 0) {
      ORQuery.push({
        location: {
          id: {
            in: res.locations,
          },
        },
      });
    }

    const products = await prisma.product.findMany({
      where: {
        OR: ORQuery.length > 0 ? ORQuery : undefined,
      },
      select: {
        id: true,
        images: true,
        name: true,
        category: {
          select: {
            name: true,
          },
        },
        price: true,
      },
    });

    console.log(products);

    const response = products.map((product) => {
      return {
        id: product.id,
        category_name: product.category?.name || "Uncategorized",
        images_url: product.images?.[0] ? getImageUrl(product.images[0], "products") : null,
        name: product.name,
        price: Number(product.price) || 0,
      };
    });

    return Response.json(response);
  } catch (error) {
    console.log(error);
    return Response.json({ status: false }, { status: 500 });
  }
}

import { getImageUrl } from "@/lib/supabase";
import prisma from "@/lib/prisma";

export async function getOrder() {
  try {
    const order = await prisma.order.findMany({
      include: {
        user: true,
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    const response = order.map((ord) => {
      return {
        id: ord.id,
        customer_name: ord.user.name,
        price: Number(ord.total),
        products: ord.products?.map((items) => {
          return {
            name: items.product.name,
            images: getImageUrl(items.product.images[0]),
          };
        }),
        status: order.status,
      };
    });

    return response;
  } catch (err) {
    console.error(err);
    return [];
  }
}

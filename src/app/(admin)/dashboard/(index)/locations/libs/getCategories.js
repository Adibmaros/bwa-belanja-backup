import prisma from "@/lib/prisma";

export async function getLocation() {
  try {
    const categories = await prisma.location.findMany({});
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getCategoriesById(id) {
  try {
    const category = await prisma.location.findFirst({
      where: {
        id: Number.parseInt(id),
      },
    });
    return category;
  } catch (err) {
    console.error(err);
    return null;
  }
}

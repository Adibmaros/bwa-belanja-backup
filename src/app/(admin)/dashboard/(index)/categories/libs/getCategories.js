import prisma from "@/lib/prisma";

export async function getCategories(){
    try {
        const categories = await prisma.category.findMany({})
        return categories;
    }

    catch (err){
        console.error(err);
        return [];
    }
}


export async function getCategoriesById(id){
    try {
        const category = await prisma.category.findFirst({
            where : {
                id : Number.parseInt(id)
            }
        })
        return category;
    }catch (err){
        console.error(err);
        return null;
    }
}
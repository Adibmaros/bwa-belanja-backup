import prisma from '@/lib/prisma'

export async function getAllBrands(){
    try {
        const brands = await prisma.brand.findMany({})
        return brands;
    } catch (err){
        console.error(err);
        return [];
    }
}


export async function getBrandById(id){
    try {
        const brand = await prisma.brand.findFirst({
            where : {
                id : Number.parseInt(id)
            }
        })
        return brand;
    } catch (err){
        console.error(err);
        return null;
    }
}
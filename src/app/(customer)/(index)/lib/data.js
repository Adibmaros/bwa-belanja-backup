import prisma from "@/lib/prisma";
import {getImageUrl} from "@/lib/supabase";

export async function getCategories(){
    try {
        const categories = await prisma.category.findMany({
            include : {
                _count : {
                    select : {
                        products : true
                    }
                }
            }
        })
        return categories

    }
    catch (err){
        console.log(err);
        return [];
    }
}

export async function getProducts(){
    try {
        const products = await prisma.product.findMany({
            select : {
                images : true,
                id : true,
                name : true,
                price : true,
                category : {
                    select : {
                        name : true
                    }
                }
            }
        })
        const response = products.map((item) => {
            return {
                ...item,
                images_url : getImageUrl(item.images[0], "products")
            }
        })
        return response;

    }
    catch (err){
        console.log(err);
        return [];
    }
}

export async function getBrands(){
    try {
        const brands = await prisma.brand.findMany({
            select : {
                logo : true,
                id : true
            }
        })
        const response = brands.map((item) => {
            return {
                ...item,
                logo_url : getImageUrl(item.logo, "brands")
            }
        })
        return response;
    }
    catch (err){
        console.log(err);
        return [];
    }
}
import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";
import {getImageUrl} from "@/lib/supabase";

export async function getProductById(id){
    try {
        const product = await prisma.product.findFirst({
            where : {
                id : Number.parseInt(id)
            },
            select : {
                id : true,
                name : true,
                _count : {
                    select : {
                        orders : true
                    }
                },
                images :true,
                description : true,
                price : true,
                category : {
                    select : {
                        name : true
                    }
                }
            }
        })

        if(!product){
            return redirect("/")
        }

        return {
            ...product,
            images : product.images.map((image) => {
                return getImageUrl(image, "products")
            })
        }
    } catch (err){
        console.error(err);
        return null;
    }
}
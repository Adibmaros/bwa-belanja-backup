"use server"

import {redirect} from "next/navigation";
import {categorySchema} from "../../../../../../lib/schema";
import prisma from "@/lib/prisma";

export async function postCategory(_, formData){
    const validate = categorySchema.safeParse({
        name : formData.get("name")
    })

    if (!validate.success){
        return {
            message : validate.error.errors[0].message
        }
    }

    try {
        await prisma.location.create({
            data : {
                name : validate.data.name
            }
        })
    } catch (err) {
        console.error(err);
        return {
            message : "Failed to create category"
        }
    }
    return redirect("/dashboard/locations")
}

export async function editCategoryById(_,formData, id){

    const validate = categorySchema.safeParse({
        name : formData.get("name")
    })

    if(!validate.success){
        return {
            message : validate.error.errors[0].message
        }
    }

    try {
        await prisma.location.update({
            where : {
                id : id
            },
            data : {
                name : validate.data.name
            }
        })
    } catch(err) {
        console.error(err);
        return {
            message : "Failed to update category"
        }
    }

    return redirect("/dashboard/locations")
}

export async function deleteCategoryById(_,formData, id){
    try {
        await prisma.location.delete({
            where : {
                id : id
            }
        })
    } catch (err) {
        console.error(err);
        return {
            message : "Failed to delete category"
        }
    }
    return redirect("/dashboard/locations")
}
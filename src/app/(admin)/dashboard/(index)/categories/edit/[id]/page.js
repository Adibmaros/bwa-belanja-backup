import React from 'react';
import {getCategoriesById} from "@/app/(admin)/dashboard/(index)/categories/libs/getCategories";
import {redirect} from "next/navigation";
import FormCategory from "@/app/(admin)/dashboard/(index)/categories/_components/form-category";
const Page = async ({params}) => {

    const {id} = await params

    const data = await getCategoriesById(id);
    if(!data){
        return redirect("/dashboard/categories")
    }
    console.log(data)
    return <FormCategory data={data} type="EDIT"/>;
};

export default Page;
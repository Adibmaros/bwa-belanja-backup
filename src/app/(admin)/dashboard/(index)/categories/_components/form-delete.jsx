"use client"

import React, {useActionState} from 'react';
import { Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import {deleteCategoryById} from "@/app/(admin)/dashboard/(index)/categories/libs/actions";
import {useFormStatus} from "react-dom";

const initialState = {
    message : ""
}

const DeleteButton = () => {
    const {pending} = useFormStatus();
    return <Button disabled={pending} className="cursor-pointer" variant="destructive" size="sm"> <Trash className="h-4 w-4" /> {pending ? "Loading..." : "Hapus"}</Button>
}

const FormDelete = ({id}) => {

    const deleteCategoryWithID = (_,formData) => deleteCategoryById(_,formData,id)

    const [state, formAction] = useActionState(deleteCategoryWithID,initialState)

    return (
        <form action={formAction} >
                <DeleteButton/>
        </form>
    );
};

export default FormDelete;
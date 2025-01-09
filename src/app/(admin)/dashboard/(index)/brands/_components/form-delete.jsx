"use client"

import React, {useActionState} from 'react';
import { Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import { deleteBrand } from '../lib/action';
import {useFormStatus} from "react-dom";

const initialState = {
    message : ""
}

const DeleteButton = () => {
    const {pending} = useFormStatus();
    return <Button size="sm" disabled={pending} className="cursor-pointer" variant="destructive"> <Trash className="h-3 w-3" /> {pending ? "Loading..." : "Hapus"}</Button>
}

const FormDelete = ({id}) => {

    const deleteCategoryWithID = (_,formData) => deleteBrand(_,formData,id)

    const [state, formAction] = useActionState(deleteCategoryWithID,initialState)

    return (
        <form action={formAction} >
                <DeleteButton/>
        </form>
    );
};

export default FormDelete;
"use client"

import React, {useActionState} from 'react';
import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import {logout} from "@/app/(admin)/dashboard/(index)/libs/actions";
import {useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";

const initialState = {
    error : ""
}

const SubmitButton = () => {
    const {pending} = useFormStatus()
    return (
    <Button className="w-full" disabled={pending} type="submit" variant="secondary">{pending ? "Loading..." : "Log Out"}</Button>
    )
}

const FormLogout = () => {

    const [state, formAction] = useActionState(logout, initialState)
    return (
        <>
            <form action={formAction}>
        <SidebarMenuItem>
                <SubmitButton/>
        </SidebarMenuItem>
            </form>
        </>
    );
};

export default FormLogout;
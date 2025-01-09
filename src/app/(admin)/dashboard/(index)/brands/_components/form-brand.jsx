"use client"

import React, {useActionState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";
import {postBrand} from "@/app/(admin)/dashboard/(index)/brands/lib/action";
import {updateBrand} from "@/app/(admin)/dashboard/(index)/brands/lib/action";

const initialState = {
    message : ""
}

const SubmitButton = () =>{
    const {pending} = useFormStatus();
    return (
        <Button disabled={pending} type="submit">{pending ? "Loading..." : "Save"}</Button>
    )
}

const FormBrand = ({data,type}) => {

    const updatebrandWithId = (_,formData) => updateBrand(_,formData, data?.id ?? "")

    const [state , formAction] = useActionState(type === "ADD" ? postBrand :updatebrandWithId , initialState)
    return (
        <div className="flex justify-center h-screen items-center">
            <form action={formAction}>

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Add Brands</CardTitle>
                        <CardDescription>Deploy your new brands in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-5">
                            {state.message && <div role="alert" className="alert alert-error mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>{state?.message}</span>
                            </div>}
                            <div className="flex flex-col space-y-1.5 mb-2">
                                <Label className="mb-1" htmlFor="name">Name</Label>
                                <Input
                                    name="name"
                                    id="name"
                                    placeholder="Name of your brand"
                                    defaultValue={data?.name}
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label className="mb-1" htmlFor="logo">Logo</Label>
                                <Input
                                    className="cursor-pointer"
                                    type="file"
                                    name="logo"
                                    id="logo"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <SubmitButton/>
                    </CardFooter>
                </Card>
            </form>

        </div>

    );
};

export default FormBrand;
"use client"

import {useActionState} from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {postCategory} from "@/app/(admin)/dashboard/(index)/categories/libs/actions";
import {editCategoryById} from "@/app/(admin)/dashboard/(index)/categories/libs/actions";
import {useFormStatus} from "react-dom";

const initialState = {
    message : ""
}

const SubmitButton = () =>{
    const {pending} = useFormStatus();
    return (    
        <Button disabled={pending} type="submit">{pending ? "Loading..." : "Save"}</Button>
    )
}

const FormCategory = ({data = null, type = "ADD"}) => {

    const updateCategoryById = (_,formData) => editCategoryById(_, formData,data?.id)

    const [state, formAction] = useActionState(type === "ADD" ? postCategory : updateCategoryById,initialState)

    return (
        <div className="flex justify-center h-screen items-center">
            <form action={formAction}>

                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Category Controller</CardTitle>
                        <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
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
                                <span>{state.message}</span>
                            </div>}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    name="name"
                                    id="name"
                                    placeholder="Name of your project"
                                    defaultValue={data?.name}
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

export default FormCategory;
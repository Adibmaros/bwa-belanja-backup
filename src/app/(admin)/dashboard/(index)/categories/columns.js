"use client";

import {Edit} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import FormDelete from "@/app/(admin)/dashboard/(index)/categories/_components/form-delete";

export const columns = [
    {
        accessorKey : "name",
        header : "Category name"
    },
    {
        id : "actions",
        cell: ({ row }) => {
            const category = row.original
            return (
                <div className="space-x-4 flex float-right" >
                    <Button className="cursor-pointer" size="sm" asChild>
                        <Link href={`/dashboard/categories/edit/${category.id}`} >
                            <Edit className="h-4 w-4" /> Edit
                        </Link>
                    </Button>
                    <FormDelete id={category.id}/>
                </div>
            )
    }
    }
]
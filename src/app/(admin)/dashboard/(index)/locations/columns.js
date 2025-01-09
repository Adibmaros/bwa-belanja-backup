"use client";

import {Edit} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import FormDelete from "@/app/(admin)/dashboard/(index)/locations/_components/form-delete";

export const columns = [
    {
        accessorKey : "name",
        header : "Location name"
    },
    {
        id : "actions",
        cell: ({ row }) => {
            const location = row.original
            return (
                <div className="space-x-4 flex float-right" >
                    <Button className="cursor-pointer" size="sm" asChild>
                        <Link href={`/dashboard/locations/edit/${location.id}`} >
                            <Edit className="h-4 w-4" /> Edit
                        </Link>
                    </Button>
                    <FormDelete id={location.id}/>
                </div>
            )
    }
    }
]
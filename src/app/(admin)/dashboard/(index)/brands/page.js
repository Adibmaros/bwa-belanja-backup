import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Plus} from "lucide-react";
import {DataTable} from "@/components/ui/data-table";
import {columns} from "@/app/(admin)/dashboard/(index)/brands/columns";
import {getAllBrands} from "@/app/(admin)/dashboard/(index)/brands/lib/data";

const Page = async () => {

    const brand = await getAllBrands();
    return (
        <>
            <div>
                <h3 className="text-xl font-semibold" >Brands</h3>
                <p className="text-sm" >manage your brands and view their performance</p>
            </div>
            <div>
                <div className="py-3 text-right" >
                    <Button  asChild>
                        <Link href="/dashboard/brands/create"> <Plus className="rounded-xl border " size={"sm"}/>Add Brands</Link>
                    </Button>
                </div>
                <DataTable columns={columns} data={brand} />
            </div>
        </>
    );
};

export default Page;
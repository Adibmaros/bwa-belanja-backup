
import {DataTable} from "@/components/ui/data-table";
import {columns} from "@/app/(admin)/dashboard/(index)/categories/columns";
import {getCategories} from "@/app/(admin)/dashboard/(index)/categories/libs/getCategories";
import {Button} from "@/components/ui/button";
import Link from 'next/link'
import {Plus} from "lucide-react";

export default async function Page() {

    const data = await getCategories();
    return (
        <>
                        <div>
                            <h3 className="text-xl font-semibold" >Categories</h3>
                            <p className="text-sm" >manage your categories and view their performance</p>
                        </div>
                        <div>
                            <div className="py-3 text-right" >
                                <Button  asChild>
                                <Link href="/dashboard/categories/create"> <Plus className="rounded-xl border " size={"sm"}/>Add Category</Link>
                                </Button>
                            </div>
                                    <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}

import React from "react";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Plus } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/(admin)/dashboard/(index)/customers/columns";
import {getCustomers} from "@/app/(admin)/dashboard/(index)/customers/lib/data";

const page = async () => {
    const customers = await getCustomers();
    return (
        <>
            <div>
                <h3 className="text-xl font-semibold">Customers</h3>
                <p className="text-sm">manage your customers and view their performance</p>
            </div>
            <div>
                <div className="py-3 text-right">
                    <Button asChild>
                        {/* <Link href="/dashboard/orders/create">
              {" "}
              <Plus className="rounded-xl border " size={"sm"} />
              Add Brands
            </Link> */}
                    </Button>
                </div>
                <DataTable columns={columns} data={customers} />
            </div>
        </>
    );
};

export default page;

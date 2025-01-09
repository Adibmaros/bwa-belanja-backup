"use client"

import { rupiahFormat } from "@/lib/utils";
import { Badge } from "lucide-react";
import Image from "next/image";

export const columns = [
    {
    accessorKey : "products",
    header : "products",
    cell :  ({row}) => {
        const order = row.original;
        return (
            <div className="flex flex-col gap-4 justify-start" >
                {order.products.map((items,i) => {
                    <div key={`${items.name + i}`} className="inline-flex items-center gap-5" > 
                     <Image src={items.images} alt={"ada yang salah dengan logo"} width={80} height={80} />
                              <span>{items.name}</span>
                     </div>
                     }
                )}

            </div>
        )
    }
},
{
    accessorKey : "customer_name",
    header : "Customer Name",
},
{
    accessorKey :  "price",
    header : "Total Price",
    cell : ({row}) => rupiahFormat(row.original.price)
},
{
    accessorKey : "status",
    header :"Status Order",
    cell : ({row}) => {
        return (
            <Badge variant={row.original.status === "failed" ? "destructive" : "default"} >
                {row.original.status}
            </Badge>
        )
    }
}
]
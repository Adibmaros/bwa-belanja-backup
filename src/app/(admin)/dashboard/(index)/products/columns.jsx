"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dateFormat, rupiahFormat } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {getImageUrl} from "@/lib/supabase";
import {Edit} from "lucide-react";
import FormProduct from "./_components/form-product";
import FormDelete from "./_components/form-delete";


export const columns = [
    {
        accessorKey : "name",
        header : "Name",
        cell : ({row}) => {
            const product = row.original;

            return (
                <div className="inline-flex items-center gap-3">
                <Image src={getImageUrl(`${product.image_url}`, "products")} alt={"ada yang salah dengan logo"} width={80} height={80} />
                <span>{product.name}</span>
              </div>
            )
        }
    },
    {
        accessorKey : "price",
        header : "Price",
        cell : ({row}) => {
            const product = row.original;

            return rupiahFormat(product.price)
        }
    },
    {
        accessorKey : "stock",
        header : "Status",
        cell : ({row}) => {
            const product = row.original;

            return <Badge variant="outline" >{product.stock}</Badge>
        }
    }, 
    {
        accessorKey : "total_sales",
        header : "Total Sales",
    },
    {
        accessorKey : "created_at",
        header : "Created At",
        cell : ({row}) => {
            const product = row.original;
            return dateFormat(product.created_at)
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const product = row.original;
          return (
            <div className="space-x-4 flex float-right">
              <Button className="cursor-pointer" size="sm" asChild>
                <Link href={`/dashboard/products/edit/${product.id}`}>
                  <Edit className="h-4 w-4" /> Edit
                </Link>
              </Button>
              <FormDelete id={product.id} />
            </div>
          );
        },
      },
]
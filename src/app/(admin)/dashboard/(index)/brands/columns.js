"use client";

import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/supabase";
import FormDelete from "../brands/_components/form-delete";

export const columns = [
  {
    accessorKey: "name",
    header: "Brand",
    cell: ({ row }) => {
      const brand = row.original;
      return (
        <div className="inline-flex items-center gap-3">
          <Image src={getImageUrl(`${brand.logo}`)} alt={"ada yang salah dengan logo"} width={80} height={80} />
          <span>{brand.name}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const brand = row.original;
      return (
        <div className="space-x-4 flex float-right">
          <Button className="cursor-pointer" size="sm" asChild>
            <Link href={`/dashboard/brands/edit/${brand.id}`}>
              <Edit className="h-4 w-4" /> Edit
            </Link>
          </Button>
          <FormDelete id={brand.id} />
        </div>
      );
    },
  },
];

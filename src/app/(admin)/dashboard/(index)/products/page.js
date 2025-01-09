import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./columns";
import { getProducts } from "./libs/data";

const page = async () => {
  const products = await getProducts();

  return (
    <div>
      <div>
        <h3 className="text-xl font-semibold">Products</h3>
        <p className="text-sm">manage your products and view their performance</p>
      </div>
      <div>
        <div className="py-3 text-right">
          <Button asChild>
            <Link href="/dashboard/products/create">
              {" "}
              <Plus className="rounded-xl border " size={"sm"} />
              Add Product
            </Link>
          </Button>
        </div>
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
};

export default page;

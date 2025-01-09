import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/(admin)/dashboard/(index)/locations/columns";
import { getLocation } from "@/app/(admin)/dashboard/(index)/locations/libs/getCategories";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function Page() {
  const data = await getLocation();
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold">Locations</h3>
        <p className="text-sm">manage your locations and view their performance</p>
      </div>
      <div>
        <div className="py-3 text-right">
          <Button asChild>
            <Link href="/dashboard/locations/create">
              {" "}
              <Plus className="rounded-xl border " size={"sm"} />
              Add Location
            </Link>
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
}

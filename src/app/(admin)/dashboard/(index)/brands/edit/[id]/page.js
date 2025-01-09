import React from "react";
import FormBrand from "@/app/(admin)/dashboard/(index)/brands/_components/form-brand";
import { getBrandById } from "@/app/(admin)/dashboard/(index)/brands/lib/data";

const Page = async ({ params }) => {
  const { id } = await params;

  const brand = await getBrandById(id);

  return <FormBrand data={brand} type="UPDATE" />;
};

export default Page;

import React from 'react';
import { getProducts } from "@/app/(customer)/(index)/lib/data";
import Link from "next/link";
import { rupiahFormat } from "@/lib/utils";
import CardProduct from "@/app/(customer)/(index)/catalogs/components/CardProduct";

const ListProducts = async ({ title, isShowDetail = true }) => {
  const products = await getProducts();

  return (
    <div id="picked" className="flex flex-col gap-5 sm:gap-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
        <h2 className="font-bold text-xl sm:text-2xl leading-tight sm:leading-[34px] text-center sm:text-left text-black">
          {title}
        </h2>
        {isShowDetail && (
          <Link
            href="/catalog"
            className="w-full sm:w-auto p-3 sm:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-center text-black"
          >
            Explore All
          </Link>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8">
        {products.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;

import React from 'react';
import Link from "next/link";
import { rupiahFormat } from "@/lib/utils";

const CardProduct = ({ item }) => {
  return (
    <Link
      key={item?.name + item?.id}
      href={`/detail-product/${item.id}`}
      className="product-card w-fit">
      <div
        className="bg-white flex flex-col gap-4 p-1 md:p-5 py-2  rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
        {/* Product Image */}
        <div className="w-full h-[120px] md:h-[140px] flex shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-[#F8F9FA]">
          <img
            src={item?.images_url}
            className="w-full h-full object-contain"
            alt={item?.name || "Product thumbnail"}
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-2">
          {/* Product Name and Category */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-black text-sm md:text-base leading-5 md:leading-[22px]">
              {item?.name}
            </p>
            <p className="text-xs md:text-sm text-[#616369]">
              {item?.category_name}
            </p>
          </div>
          {/* Product Price */}
          <p className="font-semibold text-[#0D5CD7] text-sm md:text-base leading-5 md:leading-[22px] text-wrap">
            {rupiahFormat(Number(item.price))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;

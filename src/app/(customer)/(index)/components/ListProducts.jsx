import React from 'react';
import {getProducts} from "@/app/(customer)/(index)/lib/data";
import Link from "next/link";
import {rupiahFormat} from "@/lib/utils";
import CardProduct from "@/app/(customer)/(index)/catalogs/components/CardProduct";

const ListProducts = async ({title, isShowDetail = true}) => {
    const products = await getProducts();

    return (
        <div id="picked" className="flex flex-col gap-5 md:gap-[30px]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                <h2 className="font-bold text-xl md:text-2xl leading-tight md:leading-[34px] text-center md:text-left text-black">
                    {title}
                </h2>
                {isShowDetail && (
                    <Link
                        href="/catalog"
                        className="w-full md:w-auto p-3 md:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-center text-black"
                    >
                        Explore All
                    </Link>
                )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-[30px]">
                {products.map((item) => (
                    <CardProduct key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ListProducts;
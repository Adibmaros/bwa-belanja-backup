import React from 'react';
import {getProducts} from "@/app/(customer)/(index)/lib/data";
import Link from "next/link";
import {rupiahFormat} from "@/lib/utils";
import CardProduct from "@/app/(customer)/(index)/catalogs/components/CardProduct";

const ListProducts = async ({title, isShowDetail = true}) => {

    const products = await getProducts()

    return (
        <div id="picked" className="flex flex-col gap-[30px]">
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl leading-[34px]">
                    {title}
                </h2>
                {isShowDetail && (
                    <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">
                        Explore All
                    </a>
                )}
            </div>
            <div className="grid grid-cols-5 gap-[30px]">
                {
                    products.map((item) => (
                        <CardProduct item={item}  />
                    ))
                }

            </div>
        </div>
    );
};

export default ListProducts;
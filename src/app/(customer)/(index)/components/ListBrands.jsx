import React from 'react';
import { getBrands } from "@/app/(customer)/(index)/lib/data";
import Link from "next/link";

const ListBrands = async () => {
    const brands = await getBrands();

    return (
        <div id="brands" className="flex flex-col gap-[30px] px-4 md:px-0">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <h2 className="font-bold text-2xl md:text-3xl leading-[34px] text-black">
                    Explore Our <br /> Popular Brands
                </h2>
                <a href="catalog.html" className="mt-4 md:mt-0 p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-black text-center">
                    Explore All
                </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[30px] mt-4">
                {brands.map((item) => (
                    <Link key={item.id} href="#" className="logo-card">
                        <div className="bg-white flex items-center justify-center p-[20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                            <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                                <img src={item.logo_url} className="w-full h-full object-contain" alt="thumbnail" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListBrands;

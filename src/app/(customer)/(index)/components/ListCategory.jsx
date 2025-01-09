import React from 'react';
import {getCategories} from "@/app/(customer)/(index)/lib/data";
import Link from "next/link";

const ListCategory = async () => {
    const categories = await getCategories();

    return (
        <div id="categories" className="flex flex-col gap-5 md:gap-[30px]">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
                <h2 className="font-bold text-xl md:text-2xl leading-tight md:leading-[34px] text-center md:text-left text-black">
                    Browse Products <br className="hidden md:block" /> by Categories
                </h2>
                <Link
                    href="/catalog"
                    className="w-full md:w-auto p-3 md:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-center text-black"
                >
                    Explore All
                </Link>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px]">
                {categories.map((category) => (
                    <Link
                        key={category.name + category.id}
                        href="#"
                        className="categories-card"
                    >
                        <div className="bg-white flex items-center gap-3 md:gap-[14px] p-4 md:p-5 rounded-xl md:rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                                <img
                                    src="assets/icons/mobile.svg"
                                    alt="icon"
                                    className="w-5 h-5 md:w-6 md:h-6"
                                />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-semibold leading-tight md:leading-[22px] text-sm md:text-base text-black">
                                    {category.name}
                                </p>
                                <p className="text-xs md:text-sm text-[#616369]">
                                    {category._count.products} products
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListCategory;
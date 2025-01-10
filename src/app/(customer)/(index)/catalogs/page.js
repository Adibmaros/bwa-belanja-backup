import React from "react";
import Navbar from "@/app/(customer)/(index)/components/navbar";
import SearchBar from "@/app/(customer)/(index)/catalogs/components/SearchBar";
import FilterPrice from "@/app/(customer)/(index)/catalogs/components/FilterPrice";
import FilterStock from "@/app/(customer)/(index)/catalogs/components/FilterStock";
import FilterBrand from "@/app/(customer)/(index)/catalogs/components/FilterBrand";
import FilterLocation from "@/app/(customer)/(index)/catalogs/components/FilterLocation";
import FilterKategori from "@/app/(customer)/(index)/catalogs/components/FilterKategori";
import ProductListing from "@/app/(customer)/(index)/catalogs/components/ProductListing";

const Page = () => {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
        <Navbar />
      </header>
      <SearchBar />
      <div id="catalog" className="container max-w-[1130px] mx-auto flex flex-col lg:flex-row gap-[30px] mt-[50px] pb-[100px] px-4">
        {/* Filters Section */}
        <form action="" className="flex flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-black text-2xl leading-[34px]">Filters</h2>
          <FilterPrice />
          <hr className="border-[#E5E5E5]" />
          <FilterStock />
          <hr className="border-[#E5E5E5]" />
          <FilterBrand />
          <hr className="border-[#E5E5E5]" />
          <FilterLocation />
          <hr className="border-[#E5E5E5]" />
          <FilterKategori />
        </form>

        {/* Products Section */}
        <div className="flex-1 flex flex-col bg-white p-[30px] gap-[30px] h-fit border border-[#E5E5E5] rounded-[30px]">
          <h2 className="font-bold text-2xl leading-[34px] text-black">Products</h2>
          <ProductListing />
        </div>
      </div>
    </>
  );
};

export default Page;

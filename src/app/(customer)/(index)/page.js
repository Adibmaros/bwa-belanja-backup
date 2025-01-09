import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import {getUser} from "@/lib/auth";

const ListProducts = lazy(() => import("@/app/(customer)/(index)/components/ListProducts"));
const ListBrands = lazy(() => import("@/app/(customer)/(index)/components/ListBrands"));
const ListCategory = lazy(() => import("./components/ListCategory"));

const LoadingFallback = () => <span>Loading...</span>;

const page =  () => {


  return (
      <>
        <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
          <Navbar />
          <div className="container max-w-[1130px] mx-auto flex items-center justify-between gap-1 mt-[50px]">
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
                <div className="w-[22px] h-[22px] flex shrink-0">
                  <img src="/assets/icons/crown.svg" alt="icon" />
                </div>
                <p className="font-semibold text-sm">Most Popular 100th Product in Belanja</p>
              </div>
              <div className="flex flex-col gap-[14px]">
                <h1 className="font-bold text-[55px] leading-[55px]">Working Faster 10x</h1>
                <p className="text-lg leading-[34px] text-[#6A7789]">Dolor si amet lorem super-power features riches than any other platform devices AI integrated.</p>
              </div>
              <div className="flex items-center gap-3">
                <a href="" className="p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white">
                  Add to Cart
                </a>
                <a href="" className="p-[18px_24px] rounded-full font-semibold bg-white">
                  View Details
                </a>
              </div>
            </div>
            <div className="w-[588px] h-[360px] flex shrink-0 overflow-hidden relative">
              <img src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png" className="object-contain" alt="icon" />
              <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                  <img src="/assets/icons/code-circle.svg" className="w-6 h-6" alt="icon" />
                </div>
                <p className="font-semibold text-sm">
                  Bonus Mac OS <br /> Capitan Pro
                </p>
              </div>
              <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                  <img src="/assets/icons/star-outline.svg" className="w-6 h-6" alt="icon" />
                </div>
                <p className="font-semibold text-sm text-center">
                  Include <br /> Warranty
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="content" className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px]">
          <Suspense fallback={<LoadingFallback />}>
            <ListCategory />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ListProducts title={<>Most Picked <br /> Quality Products</>} />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ListBrands />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <ListProducts title={<>New Releases <br /> From Official Stores</>} />
          </Suspense>
        </section>
      </>
  );
};

export default page;

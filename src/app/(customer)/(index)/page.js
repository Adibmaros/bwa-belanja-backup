import React, { Suspense, lazy } from "react";
import Navbar from "./components/navbar";
import {getUser} from "@/lib/auth";

const ListProducts = lazy(() => import("@/app/(customer)/(index)/components/ListProducts"));
const ListBrands = lazy(() => import("@/app/(customer)/(index)/components/ListBrands"));
const ListCategory = lazy(() => import("./components/ListCategory"));

const LoadingFallback = () => <span>Loading...</span>;

const page = () => {
  return (
      <>
        <header className="bg-[#EFF3FA] pt-5 md:pt-[30px] pb-8 md:pb-[50px]">
          <Navbar />
          <div className="container max-w-[1130px] mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-1 mt-8 md:mt-[50px]">
            {/* Left Content */}
            <div className="flex flex-col gap-6 md:gap-[30px] w-full md:w-auto">
              <div className="flex items-center gap-2 md:gap-[10px] p-2 md:p-[8px_16px] rounded-full bg-white w-fit">
                <div className="w-5 md:w-[22px] h-5 md:h-[22px] flex shrink-0">
                  <img src="./assets/icons/crown.svg" alt="icon" />
                </div>
                <p className="font-semibold text-black text-xs md:text-sm">Most Popular 100th Product in Belanja</p>
              </div>
              <div className="flex flex-col gap-3 md:gap-[14px] text-center md:text-left">
                <h1 className="font-bold text-3xl md:text-[55px] leading-tight text-black md:leading-[55px]">Working Faster 10x</h1>
                <p className="text-base md:text-lg leading-relaxed md:leading-[34px] text-[#6A7789]">
                  Dolor si amet lorem super-power features riches than any other platform devices AI integrated.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-col md:flex-row w-full md:w-auto">
                <a href="" className="w-full md:w-auto p-4 md:p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white text-center">
                  Add to Cart
                </a>
                <a href="" className="w-full md:w-auto p-4 md:p-[18px_24px] rounded-full text-blue-500 font-semibold bg-white text-center">
                  View Details
                </a>
              </div>
            </div>

            {/* Right Content - Image and Floating Elements */}
            <div className="w-full md:w-[588px] h-[300px] md:h-[360px] flex shrink-0 overflow-hidden relative">
              <img
                  src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                  className="object-contain w-full h-full"
                  alt="icon"
              />

              {/* Floating Elements */}
              <div className="absolute top-[60%] left-4 md:left-auto bg-white p-3 md:p-[14px_16px] rounded-2xl md:rounded-3xl flex items-center gap-2 md:gap-[10px]">
                <div className="w-10 md:w-12 h-10 md:h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                  <img src="/assets/icons/code-circle.svg" className="w-5 md:w-6 h-5 md:h-6" alt="icon" />
                </div>
                <p className="font-semibold text-xs md:text-sm text-black">
                  Bonus Mac OS <br /> Capitan Pro
                </p>
              </div>

              <div className="absolute right-4 md:right-0 top-[30%] bg-white p-3 md:p-[14px_16px] rounded-2xl md:rounded-3xl flex flex-col items-center gap-2 md:gap-[10px]">
                <div className="w-10 md:w-12 h-10 md:h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                  <img src="/assets/icons/star-outline.svg" className="w-5 md:w-6 h-5 md:h-6" alt="icon" />
                </div>
                <p className="font-semibold text-xs md:text-sm text-center text-black">
                  Include <br /> Warranty
                </p>
              </div>
            </div>
          </div>
        </header>

        <section id="content" className="container max-w-[1130px] mx-auto flex flex-col gap-8 md:gap-[50px] px-4 md:px-0 py-8 md:py-[50px] md:pb-[100px] bg-white">
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
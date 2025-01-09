import React from 'react';
import Navbar from "@/app/(customer)/(index)/components/navbar";
import CartProduct from "@/app/(customer)/(index)/carts/_components/cart-product";
import CheckoutForm from "@/app/(customer)/(index)/carts/_components/checkout-form";

const Page = () => {
    return (
        <>
            <header className="bg-[#EFF3FA] pt-4 sm:pt-6 md:pt-[30px] min-h-[300px] sm:h-[400px] md:h-[480px] -mb-[200px] sm:-mb-[250px] md:-mb-[310px] w-full">
                <Navbar/>
            </header>
            <main className="px-4 sm:px-5 md:px-6 lg:px-8 w-full">
                <div id="title" className="container max-w-[1130px] mx-auto w-full">
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                        {/* Breadcrumb navigation */}
                        <nav className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 items-center text-xs sm:text-sm">
                            <a className="text-[#6A7789] hover:text-black transition-colors cursor-pointer">Shop</a>
                            <span className="text-[#6A7789]">/</span>
                            <a className="text-[#6A7789] hover:text-black transition-colors cursor-pointer">Browse</a>
                            <span className="text-[#6A7789]">/</span>
                            <a className="text-[#6A7789] hover:text-black transition-colors cursor-pointer">Details</a>
                        </nav>
                        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-black">
                            My Shopping Cart
                        </h1>
                    </div>
                </div>

                {/* Cart content wrapper */}
                <div className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8 w-full">
                    <CartProduct/>
                    <CheckoutForm/>
                </div>
            </main>
        </>
    );
};

export default Page;

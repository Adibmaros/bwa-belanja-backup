"use client"

import React from 'react';
import {rupiahFormat} from "@/lib/utils";
import {useCart} from "@/hooks/useCart";
import {useRouter} from "next/navigation";

const PriceInfo = ({item, isLogin}) => {

    const {addProduct} = useCart()

    const router = useRouter()

    const checkout = () => {
        const newCart = {
            ...item,
            quantity: 1,
        }
        addProduct(newCart);
        router.push('/carts')
    }
    return (
        <div className="w-[302px] flex flex-col shrink-0 gap-5 h-fit">
            <div
                className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-black">{item?.name}</p>
                    <p className="font-bold text-[32px] leading-[48px] text-black">{rupiahFormat(item?.price)}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0">
                            <img src="/assets/icons/tick-circle.svg" alt="icon"/>
                        </div>
                        <p className="font-semibold text-black">Peti telur packaging</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0">
                            <img src="/assets/icons/tick-circle.svg" alt="icon"/>
                        </div>
                        <p className="font-semibold text-black">Manual book instructions</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0">
                            <img src="/assets/icons/tick-circle.svg" alt="icon"/>
                        </div>
                        <p className="font-semibold text-black">Customer service 24/7</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0">
                            <img src="/assets/icons/tick-circle.svg" alt="icon"/>
                        </div>
                        <p className="font-semibold text-black">Free delivery Jababeka</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex shrink-0">
                            <img src="/assets/icons/tick-circle.svg" alt="icon"/>
                        </div>
                        <p className="font-semibold text-black">Kwitansi orisinal 100%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <button disabled={!isLogin} type="button" onClick={checkout}
                       className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white disabled:opacity-60">Add
                        to Cart</button>
                    <a href=""
                       className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-black">Save
                        to Wishlist</a>
                </div>
            </div>
            <a href="">
                <div
                    className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
                    <div className="flex items-center gap-[10px]">
                        <div
                            className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                            <img src="/assets/icons/cake.svg" alt="icon"/>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-semibold text-black">Buy as a Gift</p>
                            <p className="text-sm text-black">Free Delivery</p>
                        </div>
                    </div>
                    <div className="flex shrink-0">
                        <img src="/assets/icons/arrow-right.svg" alt="icon"/>
                    </div>
                </div>
            </a>
        </div>

    );
};

export default PriceInfo;

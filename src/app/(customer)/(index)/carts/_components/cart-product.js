"use client";

import React from "react";
import { useCart } from "@/hooks/useCart";
import { rupiahFormat } from "@/lib/utils";

const CartProduct = () => {
  const { products, removeProduct, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <div id="cart" className="container max-w-[1130px] mx-auto flex flex-col gap-5 mt-[50px]">
      {products.map((product) => (
        <div key={product.id} className="product-total-card bg-white flex flex-wrap items-center justify-between p-5 rounded-[20px] border border-[#E5E5E5] gap-5">
          {/* Product Info */}
          <div className="flex items-center w-full md:w-[340px] gap-5">
            <div className="w-[120px] h-[70px] flex shrink-0 overflow-hidden items-center justify-center">
              <img src={product?.image_url} className="w-full h-full object-contain" alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold leading-[22px] text-black">{product?.name}</p>
              <p className="text-sm text-[#616369]">{product.category_name}</p>
            </div>
          </div>

          {/* Price Info */}
          <div className="w-full md:w-[150px] flex flex-col gap-1 text-center md:text-left">
            <p className="text-sm text-[#616369]">Price</p>
            <p className="font-semibold text-[#0D5CD7] leading-[22px]">{rupiahFormat(product?.price)}</p>
          </div>

          {/* Quantity Control */}
          <div className="w-full md:w-[120px] flex flex-col gap-1 text-center md:text-left">
            <p className="text-sm text-[#616369]">Quantity</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <button type="button" onClick={() => decreaseQuantity(product.id)} className="w-6 h-6 flex shrink-0 text-black">
                <img src="assets/icons/minus-cirlce.svg" alt="minus" />
              </button>
              <p className="text-[#0D5CD7] font-semibold leading-[22px]">{product.quantity}</p>
              <button type="button" onClick={() => increaseQuantity(product.id)} className="w-6 h-6 flex shrink-0 text-black">
                <img src="assets/icons/add-circle.svg" alt="plus" />
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <div className="w-full md:w-auto">
            <button type="button" onClick={() => removeProduct(product.id)} className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-black">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProduct;

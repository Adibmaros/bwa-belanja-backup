"use client";
import React, { useActionState, useMemo } from "react";
import { useCart } from "@/hooks/useCart";
import { rupiahFormat } from "@/lib/utils";
import { storeOrder } from "@/app/(customer)/(index)/carts/lib/action";
import { useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

const CheckOutButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white">
      {pending ? "Loading..." : "Checkout Now"}
    </button>
  );
};

const CheckoutForm = () => {
  const { products } = useCart();

  const storeOrderParams = (_, formData, total, product) => storeOrder(_, formData, grandTotal, products);

  const [state, formAction] = useActionState(storeOrderParams, initialState);

  // Calculate Sub Total
  const subTotal = useMemo(() => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  }, [products]);

  // Calculate PPN 11%
  const ppn = useMemo(() => subTotal * 0.11, [subTotal]);

  // Grand Total after adding PPN
  const grandTotal = useMemo(() => subTotal + ppn, [subTotal, ppn]);

  return (
    <form action={formAction} id="checkout-info" className="container max-w-[1130px] mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[50px] pb-[100px]">
      {/* Form Section */}
      <div className="w-full md:w-[650px] flex flex-col shrink-0 gap-4 h-fit order-1 md:order-none">
        <h2 className="font-bold text-2xl leading-[34px] text-black">Your Shipping Address</h2>
        <div className="flex flex-col gap-5 p-[30px] rounded-3xl border border-[#E5E5E5] bg-white">
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/profile-circle.svg" alt="icon" />
            </div>
            <input type="text" name="name" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-white" placeholder="Write your real complete name" required />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/house-2.svg" alt="icon" />
            </div>
            <input type="text" name="address" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-white" placeholder="Write your active house address" required />
          </div>
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/global.svg" alt="icon" />
              </div>
              <input type="text" name="city" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-white" placeholder="City" required />
            </div>
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/location.svg" alt="icon" />
              </div>
              <input type="number" name="postal_code" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-white" placeholder="Post code" required />
            </div>
          </div>
          <div className="flex items-start gap-[10px] rounded-[20px] border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/note.svg" alt="icon" />
            </div>
            <textarea
              name="notes"
              className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black resize-none bg-white"
              rows="6"
              placeholder="Additional notes for courier"
              required
            ></textarea>
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/call.svg" alt="icon" />
            </div>
            <input type="tel" name="phone" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black bg-white" placeholder="Write your phone number or whatsapp" required />
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="w-full md:flex-1 flex flex-col shrink-0 gap-4 h-fit order-2 md:order-none">
        <h2 className="font-bold text-2xl leading-[34px] text-black">Payment Details</h2>
        <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p className="text-black">Sub Total</p>
              </div>
              <p className="font-semibold text-black">{rupiahFormat(subTotal)}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p className="text-black">Insurance 12%</p>
              </div>
              <p className="font-semibold text-black">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p className="text-black">Shipping (Flat)</p>
              </div>
              <p className="font-semibold text-black">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p className="text-black">Warranty Original</p>
              </div>
              <p className="font-semibold text-black">Rp 0</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p className="text-black">PPN 11%</p>
              </div>
              <p className="font-semibold text-black">{rupiahFormat(ppn)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-black">Grand Total</p>
            <p className="font-bold text-[32px] leading-[48px] underline text-blue-500">{rupiahFormat(grandTotal)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <CheckOutButton />
            <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] text-black">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;

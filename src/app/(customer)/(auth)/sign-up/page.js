"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "@/app/(customer)/(auth)/lib/action";
import Link from "next/link";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white">
      {pending ? "Loading..." : "Create New Account"}
    </button>
  );
};

const ininitialState = {
  message: "",
};

const Page = () => {
  const [state, formAction] = useActionState(signUp, ininitialState);

  return (
    <div id="signin" className="bg-[#EFF3FA] min-h-screen pt-[30px] pb-[50px] flex flex-col">
      <div className="container max-w-[1130px] mx-auto flex flex-1 items-center justify-center py-5">
        <form action={formAction} className="w-[500px] bg-white p-[50px_30px] flex flex-col gap-5 rounded-3xl border border-[#E5E5E5]">
          <div className="flex justify-center">
            <img src="./assets/logos/logo-black.svg" alt="logo" />
          </div>
          <h1 className="font-bold text-2xl leading-[34px] text-[#0D5CD7]">Sign Up</h1>
          {state.message !== "" && (
            <div className="border border-red-300 p-3 text-red-500 rounded">
              <h4 className="font-semibold">Error</h4>
              <p className="text-sm">{state.message}</p>
            </div>
          )}
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="./assets/icons/profile-circle.svg" alt="icon" />
            </div>
            <input type="text" id="" name="name" className="appearance-none outline-none w-full placeholder:text-[#A0A3A6] placeholder:font-normal font-semibold text-[#0D5CD7] bg-white" placeholder="Write your complete name" />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="./assets/icons/sms.svg" alt="icon" />
            </div>
            <input type="email" id="" name="email" className="appearance-none outline-none w-full placeholder:text-[#A0A3A6] placeholder:font-normal font-semibold text-[#0D5CD7] bg-white" placeholder="Write your email address" />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="./assets/icons/lock.svg" alt="icon" />
            </div>
            <input type="password" id="password" name="password" className="appearance-none outline-none w-full placeholder:text-[#A0A3A6] placeholder:font-normal font-semibold text-[#0D5CD7] bg-white" placeholder="Write your password" />
            <button type="button" className="reveal-password flex shrink-0" onClick="togglePasswordVisibility('password', this)">
              <img src="./assets/icons/eye.svg" alt="icon" />
            </button>
          </div>
          <a href="" className="text-sm text-[#616369] underline w-fit ml-auto">
            Forgot Password
          </a>
          <div className="flex flex-col gap-3">
            <SubmitButton />
            <Link href="/sign-in" className="p-[12px_24px] bg-white rounded-full text-center font-semibold text-[#0D5CD7] border border-[#E5E5E5] hover:bg-[#EFF3FA] transition-all duration-300">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

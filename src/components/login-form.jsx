"use client"

import { useFormStatus } from'react-dom';
import {signIn} from "../app/(admin)/dashboard/(auth)/sign-in/libs/actions"; // Pastikan path ini benar
import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {useActionState} from "react";
import {Button} from "@/components/ui/button";

const initialState = {
  message: ""
}

  const SubmitButton = () => {
    const {pending} = useFormStatus()
    return (
        <Button disabled={pending} type="submit" className=" w-full">{pending ? "Loading..." : "Sign In"}</Button>
    )
  }

export function LoginForm() {



  const [state, formAction] = useActionState(signIn, initialState);
  return (
    (<Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.message && <div role="alert" className="alert alert-error mb-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>{state.message}</span>
        </div>}

        <form action={formAction}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input name={"email"} id="email"  type="email" placeholder="m@example.com" required/>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input name={"password"} id="password" type="password" required/>
            </div>
            <SubmitButton/>

          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>)
  );
}

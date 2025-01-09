"use client"

import React, {useActionState} from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import UploudImage from "./uploud-images"
import {storeProducts, updateProduct} from "@/app/(admin)/dashboard/(index)/products/libs/action";
import form from "@/app/(admin)/dashboard/(auth)/sign-in/_components/form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle } from "lucide-react";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className="w-full">
      {pending ? "Saving..." : "Save Product"}
    </Button>
  )
}

const initialState = {
  message : ""
}

const FormProduct = ({children, type, data}) => {

  const updateProductWithId = (_, formData) => updateProduct(_, formData, data?.id?? 0)

  const [state, formAction] = useActionState(type == "ADD" ? storeProducts : updateProductWithId, initialState)

  return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <form action={formAction}>

          {state.message && (
              <div className="mb-4">
                <Alert
                    variant={state.message
                        ? "destructive"
                        : "default"}
                >
                  {state.message ? (
                      <AlertCircle className="h-4 w-4" />
                  ) : (
                      <CheckCircle className="h-4 w-4" />
                  )}
                  <AlertTitle>
                    {state.message
                        ? "Error"
                        : "Success"}
                  </AlertTitle>
                  <AlertDescription>
                    {state.message}
                  </AlertDescription>
                </Alert>
              </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Left Column - Product Details */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Product Basics</CardTitle>
                  <CardDescription>Core product information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Name */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className="text-gray-400">Product Name</Label>
                    <Input
                        name="name"
                        id="name"
                        placeholder="Enter product name"
                        className="border-gray-300 focus:ring-blue-500"
                        required
                        defaultValue={data?.name?? ""}
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="description" className="text-gray-400">Description</Label>
                    <Input
                        name="description"
                        id="description"
                        placeholder="Detailed product description"
                        className="border-gray-300 focus:ring-blue-500"
                        required
                        defaultValue={data?.description?? ""}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Pricing and Stock */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Pricing & Availability</CardTitle>
                  <CardDescription>Set price and stock status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Price */}
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="price" className="text-gray-400">Price</Label>
                    <Input
                        name="price"
                        id="price"
                        type="number"
                        placeholder="Enter product price"
                        className="border-gray-400 focus:ring-blue-500"
                        required
                        defaultValue={data?.price?? ""}
                    />
                  </div>

                  {/* Stock Status */}
                  <div className="flex flex-col space-y-2">
                    <Label className="text-gray-400">Stock Status</Label>
                    <Select name="stock" defaultValue={data?.stock ?? 0} required>
                      <SelectTrigger className="border-gray-400 focus:ring-blue-500">
                        <SelectValue placeholder="Select Stock Status"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ready">Ready</SelectItem>
                        <SelectItem value="preorder">Pre-order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Classification and Media */}
            <div className="space-y-6">
              {/* Classification */}
              {children}

              {/* Media Upload */}
              <UploudImage/>

              {/* Action Buttons for Mobile View */}
              <div className="md:hidden block space-y-4">
                <Button variant="outline" type="button" className="w-full">Cancel</Button>
                <SubmitButton/>
              </div>
            </div>

            {/* Action Buttons for Desktop View */}
            <div className="col-span-full hidden md:flex justify-end space-x-4">
              <Button variant="outline" type="button" className="px-8">Cancel</Button>
              <Button type="submit" className="px-8">Save Product</Button>
            </div>

          </div>
        </form>
      </div>
  );
};

export default FormProduct;
import React from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { getAllBrands } from "@/app/(admin)/dashboard/(index)/brands/lib/data";
import { getCategories } from "@/app/(admin)/dashboard/(index)/categories/libs/getCategories";
import { getLocation } from "@/app/(admin)/dashboard/(index)/locations/libs/getCategories";
import { getProductsById } from "../../libs/data";
import FormProduct from "../../_components/form-product";

const page = async ({ params }) => {
  const { id } = await params;
  const products = await getProductsById(Number.parseInt(id));
  const brands = await getAllBrands();
  const locations = await getLocation();
  const categories = await getCategories();
  return (
    <div>
      <FormProduct type="EDIT" data={products}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Classification</CardTitle>
            <CardDescription>Categorize your product</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Brand Select */}
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-400">Brand</Label>
              <Select defaultValue={products.brand_id.toString()} name="brand_id" required>
                <SelectTrigger className="border-gray-400 focus:ring-blue-500">
                  <SelectValue placeholder="Select Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands?.map((brand) => (
                    <SelectItem key={brand.id} value={`${brand.id}`}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Select */}
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-400">Category</Label>
              <Select defaultValue={products.category_id.toString()} name="category_id" required>
                <SelectTrigger className="border-gray-400 focus:ring-blue-500">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((brand) => (
                    <SelectItem key={brand.id} value={`${brand.id}`}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location Select */}
            <div className="flex flex-col space-y-2">
              <Label className="text-gray-400">Location</Label>
              <Select defaultValue={products.location_id.toString()} name="location_id" required>
                <SelectTrigger className="border-gray-400 focus:ring-blue-500">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations?.map((brand) => (
                    <SelectItem key={brand.id} value={`${brand.id}`}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </FormProduct>
    </div>
  );
};

export default page;

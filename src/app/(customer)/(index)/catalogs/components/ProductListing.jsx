"use client"

import React from 'react';
import CardProduct from "@/app/(customer)/(index)/catalogs/components/CardProduct";
import {fetchProducts} from "@/app/(customer)/(index)/catalogs/lib/data";
import {useQuery} from "@tanstack/react-query";
import {useFilter} from "@/hooks/useFilter";

const ProductListing =  () => {

    const {filter} = useFilter()

    const {data,isLoading} = useQuery({
        queryKey: ['product-listing', filter],
        queryFn: () => fetchProducts(filter),
        // staleTime: 60 * 1000, // 1 minute
        // refetchInterval: 60 * 1000, // 1 minute
    })

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center" >
                <h1>Loading...</h1>
            </div>
        )
    }


    return (
        <div className="grid grid-cols-3 gap-[60px]">
             {data?.map((product) => (
                <CardProduct key={product?.id}  item={product}  />
            ))}
        </div>
    );
};

export default ProductListing;
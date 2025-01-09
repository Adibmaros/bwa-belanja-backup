import React from 'react';
import FilterCheckboxItem from "@/app/(customer)/(index)/catalogs/components/FilterCheckboxItem";

const FilterStock = () => {
    return (
        <div className="flex flex-col gap-[14px]">
            <p className="font-semibold leading-[22px]">Stocks</p>
            <FilterCheckboxItem type="stock" id={"preorder"} value={"Pre Order"}  />
            <FilterCheckboxItem type="stock" id={"ready"} value={"Ready"}  />

        </div>
    );
};

export default FilterStock;
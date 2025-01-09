import React from 'react';
import {getAllBrands} from "@/app/(admin)/dashboard/(index)/brands/lib/data";
import FilterCheckboxItem from "@/app/(customer)/(index)/catalogs/components/FilterCheckboxItem";

const FilterBrand = async () => {

    const brands = await getAllBrands();

    return (
        <div className="flex flex-col gap-[14px]">
            <p className="font-semibold leading-[22px]">Brands</p>
            {brands.map((item) => (
                <FilterCheckboxItem type="brand" id={item.id.toString()} key={item.id + item.name} value={item.name}  />
            ))}
        </div>
    );
};

export default FilterBrand;
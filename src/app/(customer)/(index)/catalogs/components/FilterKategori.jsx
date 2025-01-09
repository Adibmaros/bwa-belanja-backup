import React from 'react';
import {getCategories} from "@/app/(admin)/dashboard/(index)/categories/libs/getCategories";
import FilterCheckboxItem from "@/app/(customer)/(index)/catalogs/components/FilterCheckboxItem";

const FilterKategori = async () => {

    const categories = await getCategories();

    return (
        <div className="flex flex-col gap-[14px]">
            <p className="font-semibold leading-[22px]">Categories</p>
            {categories.map((item) => (
                <FilterCheckboxItem type="category" id={item.id.toString()} key={item.id + item.name} value={item.name}  />
            ))}
        </div>
    );
};

export default FilterKategori;
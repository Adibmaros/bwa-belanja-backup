import React from 'react';
import {getLocation} from "@/app/(admin)/dashboard/(index)/locations/libs/getCategories";
import FilterCheckboxItem from "@/app/(customer)/(index)/catalogs/components/FilterCheckboxItem";

const FilterLocation = async () => {

    const locations = await getLocation();

    return (
        <div className="flex flex-col gap-[14px]">
            <p className="font-semibold leading-[22px]">Location</p>
            {locations.map((item) => (
                <FilterCheckboxItem type="location" id={item.id.toString()} key={item.id + item.name} value={item.name}  />
            ))}
        </div>
    );
};

export default FilterLocation;
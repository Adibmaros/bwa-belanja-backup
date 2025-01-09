"use client"

import React from 'react';
import {useFilter} from "@/hooks/useFilter";

const FilterCheckboxItem = ({id, value , type}) => {
    const {filter, setFilter} = useFilter();

    const handleChange = (e) => {
        switch(type) {
            case "stock":
                if (e.target.checked) {
                    setFilter({
                        stock: [...(filter?.stock || []), e.target.value]
                    });
                } else {
                    setFilter({
                        stock: filter?.stock?.filter((val) => val !== e.target.value) || []
                    });
                }
                break;

            case "brand":
                if (e.target.checked) {
                    setFilter({
                        brands: [...(filter?.brands || []), Number.parseInt(e.target.value)]
                    });
                } else {
                    setFilter({
                        brands: filter?.brands?.filter((val) => val !== Number.parseInt(e.target.value)) || []
                    });
                }
                break;

            case "location":
                if (e.target.checked) {
                    setFilter({
                        locations: [...(filter?.locations || []), Number.parseInt(e.target.value)]
                    });
                } else {
                    setFilter({
                        locations: filter?.locations?.filter((val) => val !== Number.parseInt(e.target.value)) || []
                    });
                }
                break;

            case "category":
                if (e.target.checked) {
                    setFilter({
                        categories: [...(filter?.categories || []), Number.parseInt(e.target.value)]
                    });
                } else {
                    setFilter({
                        categories: filter?.categories?.filter((val) => val !== Number.parseInt(e.target.value)) || []
                    });
                }
                break;

            default:
                break;
        }
    };

    return (
        <label key={id} className="font-semibold flex items-center gap-3">
            <input
                onChange={handleChange}
                type="checkbox"
                name="brand"
                value={id}
                className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
            />
            <span className="text-black" >{value}</span>
        </label>
    );
};

export default FilterCheckboxItem;

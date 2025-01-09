import {create} from "zustand";

export const useFilter = create((set) => ({
        filter : {
            search : "",
            minPrice : 0,
            maxPrice : 0,
            stock : null,
            brands : null,
            categories : null,
            locations : null,
        },
    setFilter : (filter) => set((state) => ({
        filter : {...state.filter,...filter},
    }))
}))
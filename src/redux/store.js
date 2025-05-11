import { configureStore } from "@reduxjs/toolkit"
import apartments from "./slices/apartmentsSlice"
import filter from "./slices/filterSlice"

export const store = configureStore({
    reducer: {
        apartments,
        filter,
    },
})

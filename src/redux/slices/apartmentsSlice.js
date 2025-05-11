import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchApartments = createAsyncThunk('apartments/fetchApartmentsStatus',
    async (params) => {
        const { rooms } = params
        const { data } = await axios.get(`https://071f957245bab238.mokky.dev/items?${rooms}`)
        return data
    }
)

const initialState = {
    items: [],
}

const apartmentsSlice = createSlice({
    name: "apartments",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApartments.pending, (state) => {
                state.status = "loading"
                state.items = []
            })
            .addCase(fetchApartments.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = "success"
            })
            .addCase(fetchApartments.rejected, (state) => {
                state.status = "error"
                state.items = []
            })
    }
})

export default apartmentsSlice.reducer
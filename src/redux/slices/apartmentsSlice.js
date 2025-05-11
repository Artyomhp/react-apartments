import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchApartments = createAsyncThunk('apartments/fetchApartmentsStatus',
    async (filters = {}) => {
        const { room, area, finishing, floor } = filters

        const params = new URLSearchParams()

        if (room) params.append('rooms', room)

        if (area) {
            params.append('area[from]', area[0])
            params.append('area[to]', area[1])
        }

        if (finishing && finishing !== 'все') {
            params.append('finishing', finishing)
        }

        if (floor) {
            params.append('floor[from]', floor[0])
            params.append('floor[to]', floor[1])
        }

        const { data } = await axios.get(`https://071f957245bab238.mokky.dev/items?${params.toString()}`)
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
// import axios from "axios"
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// export const fetchApartments = createAsyncThunk('apartments/fetchApartmentsStatus',
//     async (params) => {
//         const { rooms } = params
//         const { data } = await axios.get(`https://071f957245bab238.mokky.dev/items?${rooms}`)
//         return data
//     }
// )

// const initialState = {
//     items: [],
// }

// const apartmentsSlice = createSlice({
//     name: "apartments",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchApartments.pending, (state) => {
//                 state.status = "loading"
//                 state.items = []
//             })
//             .addCase(fetchApartments.fulfilled, (state, action) => {
//                 state.items = action.payload
//                 state.status = "success"
//             })
//             .addCase(fetchApartments.rejected, (state) => {
//                 state.status = "error"
//                 state.items = []
//             })
//     }
// })

// export default apartmentsSlice.reducer

import axios from "axios"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchApartments = createAsyncThunk('apartments/fetchApartmentsStatus',
    async () => {
        // const params = new URLSearchParams()
        // const { room, area, finishing, floor } = params
        // if (filters?.room) {
        //     params.append('rooms', filters.room)
        //     console.log("выполнено 1")
        // };
        // if (filters?.area) {
        //     params.append('area[from]', filters.area[0]);
        //     params.append('area[to]', filters.area[1]);
        //     console.log("выполнено 2")

        // }
        // if (filters?.finishing && filters.finishing !== 'все') {
        //     params.append('finishing', filters.finishing);
        //     console.log("выполнено 3")

        // }
        // if (filters?.floor) {
        //     params.append('floor[from]', filters.floor[0]);
        //     params.append('floor[to]', filters.floor[1]);
        //     console.log("выполненo 4")
        // }

        const { data } = await axios.get(`https://071f957245bab238.mokky.dev/items?room=${room}&area[from]=${area[0]}&area[to]=${area[1]}&finishing=${finishing}&floor[from]=${floor[0]}&floor[to]=${floor[1]}`)
        // const { data } = await axios.get(`https://071f957245bab238.mokky.dev/items?room=${1}`)

        console.log(data)
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
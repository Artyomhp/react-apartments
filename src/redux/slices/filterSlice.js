import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: null,
    area: [37, 85],
    finishing: '',
    floor: [1, 8],
    appliedFilters: null
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setRoom(state, action) {
            state.room = action.payload
        },
        setFinishing(state, action) {
            state.finishing = action.payload
        },
        setArea(state, action) {
            state.area = action.payload
        },
        setFloor(state, action) {
            state.floor = action.payload
        },
        setApply: (state) => {
            state.appliedFilters = {
                room: state.room,
                area: [...state.area],
                finishing: state.finishing,
                floor: [...state.floor],
            }
        },
        setReset: () => initialState
    }
})

// export const { setRoom, setFinishing, setReset } = filterSlice.actions
export const { setRoom, setFinishing, setArea, setFloor, setApply, setReset } = filterSlice.actions

export default filterSlice.reducer
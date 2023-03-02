import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../Api/Api";

export const fetchAboutSlice = createAsyncThunk('aboutSlice/fetchAboutSlice',
    async () => {
        const aboutApi = "/api/about";
        const response = await Api.get(`${aboutApi}`)
        return response.data.data
    })

const initialState = {
    fetchAboutSlice,
}
const aboutSlice = createSlice({
    name: "aboutSlice",
    initialState,
    redusers: {
        allAboutSlice: (state, { payload }) => {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAboutSlice.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export const { allAboutSlice } = aboutSlice.actions;
export const getAllAboutSlice = (state) => state.fetchAboutSlice;
export default aboutSlice.reducer;


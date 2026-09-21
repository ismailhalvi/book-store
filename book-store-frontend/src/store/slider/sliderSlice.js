import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import api from "../../api";

const initialState  = {
        data : [] , 
        isLoading : false,
        error : null
}

export const getAllSliders = createAsyncThunk("sliders-actions"  , async()=> {
       const { data } = await api.get("/sliders?populate[0]=bgDark&populate[1]=heroImg");
        return data
});


const sliderSlice = createSlice({
    name : "sliders" ,
    initialState ,
    extraReducers : (builder)=> {
        builder.addCase(getAllSliders.pending , (state)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllSliders.fulfilled , (state , action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
        })
        .addCase(getAllSliders.rejected , (state , action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export const slidersReducer = sliderSlice.reducer;
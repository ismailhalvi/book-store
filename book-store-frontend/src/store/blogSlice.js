import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
    data : [] ,
    isLoading : false , 
    error : null ,
};

export const getAllBlogs = createAsyncThunk("blogs-actions" , async()=>{
   const {data} = await api.get(
    "/blogs?populate[0]=image&populate[1]=category_blog&populate[2]=author"
);
    return data
} )

const blogSlice = createSlice({
    name : "blogSlice" ,
    initialState ,
    extraReducers : (builder)=>{
        builder.addCase(getAllBlogs.pending , (state)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllBlogs.fulfilled , (state , action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
        })
        .addCase(getAllBlogs.rejected , (state , action)=>{
            state.isLoading = false;
            state.error = action.error.message || "حدث خطاء ما";
        })
    }
})

export default blogSlice.reducer
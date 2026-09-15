import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import api from "../api";

const initialState  = {
    data : [],
    isLoading : false,
    error : null
}

export const getCategories = createAsyncThunk("categories-actions" , async()=>{
    const {data} = await api.get("/categories?populate=*")
    return data
} );

const CategoriesSlice = createSlice({
    name : "CategoriesSlice",
    initialState ,
    extraReducers : (builder)=>{
        builder.addCase(getCategories.pending , (state)=>{
            state.isLoading = true;
            state.error = null;
        
        })
        .addCase(getCategories.fulfilled , (state , action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
        })
        .addCase(getCategories.rejected , (state , action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
        
    }

})
export default CategoriesSlice.reducer;
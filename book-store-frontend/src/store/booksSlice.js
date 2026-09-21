import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import api from "../api";

const initialState  = {
    data : [],
    isLoading : false,  
    error : null,
    meta: null
}


export const getBooks = createAsyncThunk(
  "books-actions",
  async ({ page = 1, pageSize = 6 } = {}) => {
    const { data } = await api.get(
      `/books?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate[0]=image&populate[1]=Backimg&populate[2]=categories&populate[3]=author`
    );

    return data;
  }
);

const BooksSlice = createSlice({
    name : "BooksSlice  ",
    initialState ,
    extraReducers : (builder)=>{
        builder.addCase(getBooks.pending , (state)=>{
            state.isLoading = true;
            state.error = null;
    
        })
        .addCase(getBooks.fulfilled , (state , action)=>{
            state.data = action.payload.data;
            state.isLoading = false;
            state.meta = action.payload.meta
        })
        .addCase(getBooks.rejected , (state , action)=>{
            state.isLoading = false;
            state.error = action.error.message || "حدث خطأ ما";
        })
        
    }
})

export default BooksSlice.reducer;       
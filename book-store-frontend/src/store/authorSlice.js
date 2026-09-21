import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const initialState = {
  data: [],
  authorDetails: null,
  books: [],
  isLoading: false,
  error: null,
};

export const getAllAuthors = createAsyncThunk("authors-actions", async () => {
  const { data } = await api.get("/authors?populate=image");
  return data;
});

export const getAllAuthorsDetails = createAsyncThunk(
  "author-books-actions",
  async ({ authorId }) => {
    const { data } = await api.get(
      `/authors/${authorId}?populate[books][populate]=image`,
    );

    console.log("AUTHOR DETAILS:", data);

    return data;
  },
);

const authorsSlice = createSlice({
  name: "authorsSlice",

  initialState,

  extraReducers: (builder) => {
    builder

      // Get All Authors
      .addCase(getAllAuthors.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getAllAuthors.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
      })

      .addCase(getAllAuthors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "حدث خطأ ما";
      })

      // Get Author Details
      .addCase(getAllAuthorsDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.books = [];
      })

      .addCase(getAllAuthorsDetails.fulfilled, (state, action) => {
        const author = action.payload.data;

        state.authorDetails = author;

        state.books = author?.books || [];

        state.isLoading = false;
      })

      .addCase(getAllAuthorsDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "حدث خطأ ما";
      });
  },
});

export default authorsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishlistItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const book = action.payload;

      const existingBook = state.cartItems.find(
        (item) => item.id === book.id
      );

      if (existingBook) {
        existingBook.quantity += 1;
      } else {
        state.cartItems.push({
          ...book,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQuantity: (state, action) => {
      const book = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (book) {
        book.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const book = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (book && book.quantity > 1) {
        book.quantity -= 1;
      }
    },

    toggleWishlist: (state, action) => {
      const book = action.payload;

      const existingBook = state.wishlistItems.find(
        (item) => item.id === book.id
      );

      if (existingBook) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item.id !== book.id
        );
      } else {
        state.wishlistItems.push(book);
      }
    },

    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleWishlist,
  removeFromWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;
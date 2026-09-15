import  {configureStore} from "@reduxjs/toolkit";
import  categoriesReducer  from "./categoriesSlice";
import  booksReducer  from "./booksSlice";
import  {slidersReducer } from "./slider/sliderSlice";
import  authorsReducer from "./authorSlice";
import  blogReducer from "./blogSlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    sliders: slidersReducer,
    authors: authorsReducer,
    blogs: blogReducer , 
    cart: cartReducer,
  },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import  isLoadingSlice  from "./slices/isLoading.slice";
import  productsSlice from "./slices/products.slices";

export default configureStore({
  reducer: {
    products: productsSlice,
    isLoading: isLoadingSlice
  }
})
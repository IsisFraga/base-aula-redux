import { configureStore, createReducer } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    cart: createReducer,
  },
});

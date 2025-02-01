import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice.js";
import { CustomMiddleware } from "./middleware/CustomMiddleware.js";
import { HigherApiSlice } from "./HOR/HigherApiSlice.js";
import counterReducer from "./counterSlice.js";
import { api1Slice } from "./api1Slice.js";
import counterUsingReducer from "./Reducer/createReducer.js";

export const Store = configureStore({
  reducer: {
    // api: apiSlice,
    counter: counterReducer,
    // [api1Slice.reducerPath]: api1Slice.reducer,
    // counterusingreducer: counterUsingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api1Slice.middleware, CustomMiddleware(1000)),
});

import { createReducer, createSlice } from "@reduxjs/toolkit";
// import { errorDispatch, getProductList, pendingDispatch } from "./actions";

const initialState = {
  auth: null,
  login: null,
  status: "idle",
  error: null,
  productList: [
    {
      id: 1,
      title: "task1",
      status: "completed",
      name:"someswar"
    },
    {
      id: 2,
      title: "task2",
      status: "active",
      name:"rahul"
    },
  ],
};
const apiSlice = createSlice({
  name: "apiSlice",
  initialState,
  reducers: {
    pendingDispatch: (state) => {
      state.status = "pending";
    },
    getProductList: (state, action) => {
      state.status = "succeeded";
      state.productList = action.payload;
    },
    errorDispatch: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

// const apiSlice=createReducer(initialState,(builder)=>{
//     builder.addCase(pendingDispatch,(state)=>{
//         state.status='pending';
//     }).addCase(getProductList,(state,action)=>{
//         state.status='succeeded';
//         state.productList=action.payload
//     }).addCase(errorDispatch,(state,action)=>{
//         state.status='failed';
//         state.error=action.payload;
//     })
// })
export const {
  getProductList,
  pendingDispatch,
  errorDispatch,
} = apiSlice.actions;

export default apiSlice.reducer;

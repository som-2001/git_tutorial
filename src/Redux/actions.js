import { createAction } from "@reduxjs/toolkit";

export const pendingDispatch=createAction('apiSlice/pendingDispatch');//{type:'pendingDispatch'}
export const getProductList=createAction('apiSlice/getProductList');
export const errorDispatch=createAction('apiSlice/errorDispatch');
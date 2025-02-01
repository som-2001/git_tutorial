import axios from "axios";
// import { errorDispatch, getProductList, pendingDispatch } from "./apiSlice";
import { errorDispatch, getProductList, pendingDispatch } from "./actions";

export const reduxThunk=()=>async(dispatch)=>{

        dispatch(pendingDispatch());
        
        axios.get('https://fakestoreapi.com/products').then(res=>{
            dispatch(getProductList(res.data));
        }).catch(error=>{
            dispatch(errorDispatch(error.message));
        })

    

}
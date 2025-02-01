import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState={
    count:0
}
export const increment=createAction('increment');//{type:increment}
export const decrement=createAction('decrement')

const counterReducer=createReducer(initialState,(builder)=>{
    builder.addCase(increment,(state)=>{
        state.count=state.count+1
    }).addCase(decrement,(state)=>{
        state.count=state.count-1
    })
})

export default counterReducer;
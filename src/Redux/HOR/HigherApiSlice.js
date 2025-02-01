export const HigherApiSlice=(reducer)=>(state,action)=>{
 
    console.log("State",state);
    console.log("action",action);

    const newState=reducer(state,action);

    console.log("newState",newState);

    return newState;

}
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counters',
    initialState: {count:0},
    reducers:
    {
        increment: (state)=>{
                state.count = state.count +1;
        },
        decrement: (state)=>{
                state.count = state.count -1;
        },
        reset: (state)=>{
                state.count = 0
        },
        increaseValue:(state,action)=>{
            state.count+= action.payload
        }
        
    }
});
export const { increment, decrement,reset,increaseValue } = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count:0
}

export const counterSlice = createSlice(
	{
		name:'counter',
		initialState,
		reducers:{
			increment: (state) => {
				state.count += 1
			},
			decrement: (state) => {
				state.count -=  1
			},
			resetvalue: (state) => {
				state.count = 0
			},
			incrementbyamount: (state, action) => {
				state.count += action.payload
			}
		}
	}
)

export const { increment, decrement, resetvalue, incrementbyamount } = counterSlice.actions;

export default counterSlice.reducer;
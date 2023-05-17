import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
	},
})

export const { increment, decrement } = counterReducer.actions
export default counterReducer.reducer

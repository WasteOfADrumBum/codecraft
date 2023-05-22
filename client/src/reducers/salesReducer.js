const initialState = []

const salesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_SALE':
			return [...state, action.payload]
		case 'DELETE_SALE':
			return state.filter((sale) => sale._id !== action.payload)
		case 'UPDATE_SALE':
			return state.map((sale) => (sale._id === action.payload.saleId ? action.payload.updatedSale : sale))
		case 'GET_SALE':
			// You can handle fetching a single sale if needed
			// Modify the state accordingly based on your use case
			return state
		case 'GET_ALL_SALES':
			return action.payload
		default:
			return state
	}
}

export default salesReducer

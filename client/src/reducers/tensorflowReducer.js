const initialState = {
	prediction: null,
	error: null,
}

const predictionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_PREDICTION_SUCCESS':
			return { ...state, prediction: action.payload, error: null }
		case 'FETCH_PREDICTION_ERROR':
			return { ...state, error: action.payload }
		default:
			return state
	}
}

export default predictionReducer

// client\src\actions\tensorflowActions.js
import axios from 'axios'

export const fetchPrediction = (data) => async (dispatch) => {
	try {
		// Make a request to the ML/AI API route
		const response = await axios.post('/api/tensorflow', { data })

		// Log the response for debugging
		console.log('Prediction API Response:', response)

		// Dispatch the prediction to the Redux store
		dispatch({
			type: 'FETCH_PREDICTION_SUCCESS',
			payload: response.data.prediction,
		})
	} catch (error) {
		// Log the error for debugging
		console.log('Prediction API Error:', error)

		dispatch({ type: 'FETCH_PREDICTION_ERROR', payload: error.message })
	}
}

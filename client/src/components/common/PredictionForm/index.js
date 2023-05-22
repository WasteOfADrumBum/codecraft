// client\src\components\common\PredictionForm\index.js
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrediction } from '../../../actions/tensorflowActions'

const PredictionForm = () => {
	const [inputData, setInputData] = useState('')
	const { prediction, error } = useSelector((state) => state.prediction)
	const dispatch = useDispatch()

	const handleFormSubmit = (e) => {
		e.preventDefault()

		// Dispatch the fetchPrediction action with input data
		dispatch(fetchPrediction(inputData))
	}

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input type='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />
				<button type='submit'>Predict</button>
			</form>
			{prediction && <div>Prediction: {prediction.value}</div>}
			{error && <div>Error: {error.message}</div>}
		</div>
	)
}

export default PredictionForm

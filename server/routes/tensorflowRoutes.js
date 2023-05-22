const express = require('express')
const tf = require('@tensorflow/tfjs-node')
const path = require('path')
const router = express.Router()

// Load the saved model
const loadModel = async () => {
	console.log('Loading the model...')
	const modelPath = path.join(__dirname, '../models/tensorflowModel.json')
	const model = await tf.loadLayersModel('file://' + modelPath)
	console.log('Model loaded successfully.')
	return model
}

// Define the predict function
const predict = async (req, res) => {
	const inputData = req.body.data // The input data from the frontend

	console.log('Received prediction request. Input data:', inputData)

	try {
		// Load the model
		const model = await loadModel()

		// Preprocess the input data if required
		const inputTensor = tf.tensor(inputData) // Convert the input data to a tensor
		const processedInput = preprocessData(inputTensor) // Preprocess the input data if required

		// Perform prediction using the loaded model
		console.log('Performing prediction...')
		const prediction = model.predict(processedInput)

		// Convert the prediction tensor to JSON
		const predictionData = await prediction.data()
		const predictionArray = Array.from(predictionData)

		// Send the prediction back to the frontend
		res.json({ prediction: predictionArray })
	} catch (error) {
		console.error('Prediction API Error:', error)
		res.status(500).json({ error: 'Prediction failed' })
	}
}

// Helper function to preprocess the input data
function preprocessData(data) {
	// Perform any required preprocessing steps on the input data
	// ...
	return data // Return the preprocessed data tensor
}

// Define the predict route
router.post('/', predict)

module.exports = router

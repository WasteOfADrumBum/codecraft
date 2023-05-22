// server\server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Import routes
const userRoutes = require('./routes/usersRoutes')
const tensorflowRoutes = require('./routes/tensorflowRoutes')
const salesRoutes = require('./routes/salesRoutes')

// Create Express app
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Connect to MongoDB
;(async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/codecraft', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			writeConcern: {
				w: 'majority',
				j: true,
				wtimeout: 1000,
			},
		})
		console.log('Connected to MongoDB')
	} catch (error) {
		console.error('MongoDB connection error:', error)
	}
})()

// Routes
app.use('/api/users', userRoutes)
app.use('/api/tensorflow', tensorflowRoutes)
app.use('/api/sales', salesRoutes)

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

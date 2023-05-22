// run using node dummyDataUtil.js in the terminal
require('dotenv').config()
const faker = require('faker')
const mongoose = require('mongoose')

// Load environment variables
//const { MONGODB_URI } = process.env

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/codecraft', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

// Import the Sale model
const Sale = require('../models/salesModel')

const generateDummySalesData = async (count) => {
	try {
		// Generate dummy sales data
		const salesData = []
		for (let i = 0; i < count; i++) {
			const sale = {
				product: faker.commerce.productName(),
				quantity: faker.random.number({ min: 1, max: 10 }),
				price: faker.random.number({ min: 10, max: 100 }),
				customer: new mongoose.Types.ObjectId(),
				date: faker.date.past(),
			}
			salesData.push(sale)
		}

		// Insert dummy sales data into the database
		await Sale.insertMany(salesData)
		console.log(`${count} dummy sales data added successfully.`)
	} catch (error) {
		console.error('Error adding dummy sales data:', error)
	} finally {
		// Disconnect from MongoDB after adding data
		mongoose.disconnect()
	}
}

const numberOfSales = 20 // Number of dummy sales data entries to generate
generateDummySalesData(numberOfSales)

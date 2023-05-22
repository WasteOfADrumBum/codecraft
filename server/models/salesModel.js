const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
	product: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
		min: 1,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

const Sale = mongoose.model('Sale', saleSchema)

module.exports = Sale

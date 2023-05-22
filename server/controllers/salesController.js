const Sale = require('../models/salesModel')

// Controller function to get all sales
const getAllSales = async (req, res) => {
	try {
		console.log('Controller: getAllSales')
		const sales = await Sale.find()
		res.json(sales)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to create a new sale
const createSale = async (req, res) => {
	try {
		console.log('Controller: createSale', req.body)
		const newSale = new Sale(req.body)
		const savedSale = await newSale.save()
		res.json(savedSale)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to get a sale by ID
const getSaleById = async (req, res) => {
	try {
		console.log('Controller: getSaleById')
		const sale = await Sale.findById(req.params.id)
		if (!sale) {
			return res.status(404).json({ error: 'Sale not found' })
		}
		res.json(sale)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to update a sale
const updateSale = async (req, res) => {
	try {
		console.log('Controller: updateSale')
		const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!updatedSale) {
			return res.status(404).json({ error: 'Sale not found' })
		}
		res.json(updatedSale)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to delete a sale
const deleteSale = async (req, res) => {
	try {
		console.log('Controller: deleteSale')
		const deletedSale = await Sale.findByIdAndDelete(req.params.id)
		if (!deletedSale) {
			return res.status(404).json({ error: 'Sale not found' })
		}
		res.json({ message: 'Sale deleted successfully' })
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

module.exports = {
	getAllSales,
	createSale,
	getSaleById,
	updateSale,
	deleteSale,
}

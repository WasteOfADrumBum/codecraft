const express = require('express')
const router = express.Router()
const salesController = require('../controllers/salesController')

// Define API routes for sales
router.get('/', (req, res) => {
	console.log('GET /sales')
	salesController.getAllSales(req, res)
})

router.post('/', (req, res) => {
	console.log('POST /sales:', req.body)
	salesController.createSale(req, res)
})

router.get('/:id', (req, res) => {
	console.log('GET /sales/:id')
	salesController.getSaleById(req, res)
})

router.put('/:id', (req, res) => {
	console.log('PUT /sales/:id')
	salesController.updateSale(req, res)
})

router.delete('/:id', (req, res) => {
	console.log('DELETE /sales/:id')
	salesController.deleteSale(req, res)
})

module.exports = router

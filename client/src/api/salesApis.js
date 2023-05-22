import axios from 'axios'

const API_URL = '/api/sales'

// Function to get all sales
export const getAllSales = async () => {
	try {
		console.log('Fetching all sales...')
		const response = await axios.get(API_URL)
		console.log('Sales data:', response.data)
		return response.data
	} catch (error) {
		console.error('Failed to fetch sales:', error)
		throw new Error('Failed to fetch sales')
	}
}

// Function to create a new sale
export const createSale = async (saleData) => {
	try {
		console.log('Creating a new sale:', saleData)
		const response = await axios.post(API_URL, saleData)
		console.log('Created sale:', response.data)
		return response.data
	} catch (error) {
		console.error('Failed to create sale:', error)
		throw new Error('Failed to create sale')
	}
}

// Function to get a sale by ID
export const getSaleById = async (saleId) => {
	try {
		console.log('Fetching sale by ID:', saleId)
		const response = await axios.get(`${API_URL}/${saleId}`)
		console.log('Fetched sale:', response.data)
		return response.data
	} catch (error) {
		console.error('Failed to fetch sale:', error)
		throw new Error('Failed to fetch sale')
	}
}

// Function to update a sale
export const updateSale = async (saleId, saleData) => {
	try {
		console.log('Updating sale:', saleId, saleData)
		const response = await axios.put(`${API_URL}/${saleId}`, saleData)
		console.log('Updated sale:', response.data)
		return response.data
	} catch (error) {
		console.error('Failed to update sale:', error)
		throw new Error('Failed to update sale')
	}
}

// Function to delete a sale
export const deleteSale = async (saleId) => {
	try {
		console.log('Deleting sale:', saleId)
		const response = await axios.delete(`${API_URL}/${saleId}`)
		console.log('Deleted sale:', response.data)
		return response.data
	} catch (error) {
		console.error('Failed to delete sale:', error)
		throw new Error('Failed to delete sale')
	}
}

import axios from 'axios'

const API_URL = '/api/sales'

// Action to fetch all sales
export const getAllSales = () => {
	return async (dispatch) => {
		try {
			console.log('Fetching all sales...')
			const response = await axios.get(API_URL)
			const sales = response.data
			console.log('Sales data:', sales)
			dispatch({ type: 'GET_ALL_SALES', payload: sales })
		} catch (error) {
			console.error('Failed to fetch sales:', error)
			throw new Error('Failed to fetch sales')
		}
	}
}

// Action to create a new sale
export const createSale = (saleData) => {
	return async (dispatch) => {
		try {
			console.log('Creating a new sale:', saleData)
			const response = await axios.post(API_URL, saleData)
			const createdSale = response.data
			console.log('Created sale:', createdSale)
			dispatch({ type: 'ADD_SALE', payload: createdSale })
		} catch (error) {
			console.error('Failed to create sale:', error)
			throw new Error('Failed to create sale')
		}
	}
}

// Action to get a sale by ID
export const getSaleById = (saleId) => {
	return async (dispatch) => {
		try {
			console.log('Fetching sale by ID:', saleId)
			const response = await axios.get(`${API_URL}/${saleId}`)
			const sale = response.data
			console.log('Fetched sale:', sale)
			dispatch({ type: 'GET_SALE', payload: sale })
		} catch (error) {
			console.error('Failed to fetch sale:', error)
			throw new Error('Failed to fetch sale')
		}
	}
}

// Action to update a sale
export const updateSale = (saleId, saleData) => {
	return async (dispatch) => {
		try {
			console.log('Updating sale:', saleId, saleData)
			const response = await axios.put(`${API_URL}/${saleId}`, saleData)
			const updatedSale = response.data
			console.log('Updated sale:', updatedSale)
			dispatch({ type: 'UPDATE_SALE', payload: { saleId, updatedSale } })
		} catch (error) {
			console.error('Failed to update sale:', error)
			throw new Error('Failed to update sale')
		}
	}
}

// Action to delete a sale
export const deleteSale = (saleId) => {
	return async (dispatch) => {
		try {
			console.log('Deleting sale:', saleId)
			const response = await axios.delete(`${API_URL}/${saleId}`)
			const deletedSale = response.data
			console.log('Deleted sale:', deletedSale)
			dispatch({ type: 'DELETE_SALE', payload: saleId })
		} catch (error) {
			console.error('Failed to delete sale:', error)
			throw new Error('Failed to delete sale')
		}
	}
}

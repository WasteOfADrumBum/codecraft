import axios from 'axios'

const API_URL = '/api/users'

// Function to get all users
export const getAllUsers = async () => {
	try {
		console.log('API: getAllUsers')
		const response = await axios.get(API_URL)
		return response.data
	} catch (error) {
		throw new Error('Failed to fetch users')
	}
}

// Function to create a new user
export const createUser = async (userData) => {
	try {
		console.log('API: createUser')
		const response = await axios.post(API_URL, userData)
		return response.data
	} catch (error) {
		throw new Error('Failed to create user')
	}
}

// Function to get a user by ID
export const getUserById = async (userId) => {
	try {
		console.log('API: getUserById')
		const response = await axios.get(`${API_URL}/${userId}`)
		console.log('response.data', response.data)
		return response.data
	} catch (error) {
		throw new Error('Failed to fetch user')
	}
}

// Function to update a user
export const updateUser = async (userId, userData) => {
	try {
		console.log('API: updateUser')
		const response = await axios.put(`${API_URL}/${userId}`, userData)
		return response.data
	} catch (error) {
		throw new Error('Failed to update user')
	}
}

// Function to delete a user
export const deleteUser = async (userId) => {
	try {
		console.log('API: deleteUser')
		const response = await axios.delete(`${API_URL}/${userId}`)
		return response.data
	} catch (error) {
		throw new Error('Failed to delete user')
	}
}

// Function to login a user
export const loginUser = async (username, password) => {
	try {
		console.log('API: loginUser')
		const response = await axios.post(`${API_URL}/login`, { username, password })
		return response.data
	} catch (error) {
		throw new Error('Failed to login')
	}
}

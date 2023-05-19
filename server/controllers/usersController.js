const User = require('../models/usersModel')

// Controller function to get all users
const getAllUsers = async (req, res) => {
	try {
		console.log('Controller: getAllUsers')
		const users = await User.find()
		res.json(users)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to create a new user
const createUser = async (req, res) => {
	try {
		console.log('Controller: createUser ', req.body)
		const newUser = new User(req.body)
		const savedUser = await newUser.save()
		res.json(savedUser)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to get a user by ID
const getUserById = async (req, res) => {
	try {
		console.log('Controller: getUserById')
		const user = await User.findById(req.params.id)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json(user)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to update a user
const updateUser = async (req, res) => {
	try {
		console.log('Controller: updateUser')
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		if (!updatedUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json(updatedUser)
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

// Controller function to delete a user
const deleteUser = async (req, res) => {
	try {
		console.log('Controller: deleteUser')
		const deletedUser = await User.findByIdAndDelete(req.params.id)
		if (!deletedUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json({ message: 'User deleted successfully' })
	} catch (error) {
		res.status(500).json({ error: 'Server error' })
	}
}

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
}

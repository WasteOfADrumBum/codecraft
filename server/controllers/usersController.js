const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
		console.log('Controller: createUser', req.body)
		const { password, ...userData } = req.body

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10)

		// Create a new user object with the hashed password
		const newUser = new User({ ...userData, password: hashedPassword })

		// Save the user to the database
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

// Controller function to login a user
const loginUser = async (req, res) => {
	try {
		console.log('Controller: loginUser')
		const { username, password } = req.body

		// Check if the username exists in the database
		const user = await User.findOne({ username })
		console.log('user', user)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		// Compare the provided password with the hashed password stored in the database
		const passwordMatch = await bcrypt.compare(password, user.password)
		console.log('passwordMatch', passwordMatch)
		console.log('user.password', user.password)
		console.log('password', password)
		if (!passwordMatch) {
			return res.status(401).json({ error: 'Invalid credentials' })
		}

		// Create and sign a JWT token
		const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' })

		res.json({ token })
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
	loginUser,
}

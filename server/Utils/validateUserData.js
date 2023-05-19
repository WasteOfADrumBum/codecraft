// validateUserData.js

const User = require('../models/usersModel')

// Sample data
const userData = {
	first: 'Jane',
	middle: 'Middle',
	last: 'Doe',
	email: 'email@email.com',
	username: 'Username',
	password: 'password1',
	age: '33',
	dateOfBirth: '1990-01-01',
	address: {
		street: '123 Main St',
		city: 'usaCity',
		state: 'al',
		country: 'usa',
		zipCode: '12345',
	},
	bio: 'Bio Copy',
	profileImage: 'profile_secondary.jpg',
}

// Create a new user instance
const newUser = new User(userData)

// Validate the user data against the model schema
newUser
	.validate()
	.then(() => {
		console.log('User data is valid')
	})
	.catch((error) => {
		console.error('User data is invalid:', error)
	})

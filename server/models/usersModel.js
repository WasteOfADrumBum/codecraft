const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	first: {
		type: String,
		required: true,
	},
	middle: {
		type: String,
		required: true,
	},
	last: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	address: {
		street: {
			type: String,
			default: '',
		},
		city: {
			type: String,
			default: '',
		},
		state: {
			type: String,
			default: '',
		},
		country: {
			type: String,
			default: '',
		},
		zipCode: {
			type: String,
			default: '',
		},
	},
	bio: {
		type: String,
		default: '',
	},
	profileImage: {
		type: String,
		default: '',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	// Add more fields as per your user requirements
})

const User = mongoose.model('User', userSchema)

module.exports = User

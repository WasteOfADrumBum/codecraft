const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

// Define API routes for users
// router.get('/', userController.getAllUsers)
// router.post('/', userController.createUser)
// router.get('/:id', userController.getUserById)
// router.put('/:id', userController.updateUser)
// router.delete('/:id', userController.deleteUser)

router.get('/', (req, res) => {
	console.log('GET /users')
	userController.getAllUsers(req, res)
})

router.post('/', (req, res) => {
	console.log('POST /users:', req.body)
	userController.createUser(req, res)
})

router.get('/:id', (req, res) => {
	console.log('GET /users/:id')
	userController.getUserById(req, res)
})

router.put('/:id', (req, res) => {
	console.log('PUT /users/:id')
	userController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
	console.log('DELETE /users/:id')
	userController.deleteUser(req, res)
})

router.post('/login', (req, res) => {
	console.log('POST /users/login:', req.body)
	userController.loginUser(req, res)
})

module.exports = router

import React, { useState, useEffect } from 'react'
import { UserTable, UserForm } from '../../common'
import { Header } from '../../layout'
import { getAllUsers, createUser, getUserById, updateUser, deleteUser } from '../../../api/userApis'

const UsersDashboard = () => {
	const [showUserForm, setShowUserForm] = useState(false)
	const [users, setUsers] = useState([])

	useEffect(() => {
		// Fetch users from your API and update the state
		const fetchUsers = async () => {
			try {
				const usersData = await getAllUsers()
				setUsers(usersData)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}

		fetchUsers()
	}, [])

	const addUser = async (userData) => {
		try {
			const newUser = await createUser(userData)
			console.log('User created:', newUser)
			// Update the users state with the newly created user
			setUsers((prevUsers) => [...prevUsers, newUser])
		} catch (error) {
			console.error('Error creating user:', error)
		}
	}

	const handleAddUserClick = () => {
		setShowUserForm(true)
	}

	const handleFormSubmit = (formData) => {
		// Perform form submission logic or API request with the user data
		console.log(formData)
		addUser(formData)
		// Reset the form and switch back to displaying the user table
		setShowUserForm(false)
	}

	const handleCancel = () => {
		setShowUserForm(false)
	}

	return (
		<div>
			<Header icon='fas fa-users' header='Users' subHeader='' />
			{showUserForm ? (
				<div>
					<UserForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
				</div>
			) : (
				<div className='d-flex flex-column'>
					<button className='btn btn-primary text-light mb-3 ms-auto' onClick={handleAddUserClick}>
						<i className='fas fa-plus' />
					</button>
					<UserTable users={users} />
				</div>
			)}
		</div>
	)
}

export default UsersDashboard

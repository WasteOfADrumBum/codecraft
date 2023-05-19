import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserById, updateUser } from '../../../api/userApis'
import { StateCountrySelect } from '../../common'

const UserUpdateModal = ({ userId }) => {
	const navigate = useNavigate()
	const [user, setUser] = useState({})
	const [showModal, setShowModal] = useState(false)

	const getUserData = useCallback(async () => {
		try {
			const userData = await getUserById(userId)
			const dateOfBirth = new Date(userData.dateOfBirth)
			userData.dateOfBirth = dateOfBirth.toISOString().slice(0, 10)
			setUser(userData)
		} catch (error) {
			console.error('Failed to fetch user data', error)
		}
	}, [userId])

	useEffect(() => {
		getUserData()
	}, [getUserData])

	const handleInputChange = (event) => {
		const { name, value } = event.target

		if (name === 'dateOfBirth') {
			const date = new Date(value)
			setUser((prevUser) => ({
				...prevUser,
				[name]: date,
			}))
		} else {
			setUser((prevUser) => ({
				...prevUser,
				[name]: value,
			}))
		}
	}

	const handleAddressChange = (event) => {
		const { name, value } = event.target
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				[name]: value,
			},
		}))
	}

	const handleCountryChange = (selectedCountry) => {
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				country: selectedCountry,
			},
		}))
	}

	const handleStateChange = (selectedState) => {
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				state: selectedState,
			},
		}))
	}

	const handleUpdateUser = async () => {
		try {
			await updateUser(userId, user)
			setShowModal(false)
			// Reload the current page
			window.location.reload()
		} catch (error) {
			console.error('Failed to update user', error)
		}
	}

	const handleShowModal = () => {
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}

	return (
		<>
			<button type='button' className='btn btn-secondary' onClick={handleShowModal}>
				<i className='fas fa-edit' />
			</button>

			{showModal && (
				<div className='modal fade show' tabIndex='-1' role='dialog' style={{ display: 'block' }}>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title'>Update User</h5>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-label='Close'
									onClick={handleCloseModal}>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div className='modal-body'>
								<div className='row'>
									<div className='col-md-6 mb-3'>
										<label htmlFor='first'>First Name:</label>
										<input
											type='text'
											name='first'
											value={user.first || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='middle'>Middle Name:</label>
										<input
											type='text'
											name='middle'
											value={user.middle || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='last'>Last Name:</label>
										<input
											type='text'
											name='last'
											value={user.last || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='email'>Email:</label>
										<input
											type='email'
											name='email'
											value={user.email || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='username'>Username:</label>
										<input
											type='text'
											name='username'
											value={user.username || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='password'>Password:</label>
										<input
											type='password'
											name='password'
											value={user.password || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='age'>Age:</label>
										<input
											type='number'
											name='age'
											value={user.age || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='dateOfBirth'>Date of Birth:</label>
										<input
											type='date'
											name='dateOfBirth'
											value={user.dateOfBirth || ''}
											onChange={handleInputChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='street'>Street:</label>
										<input
											type='text'
											name='street'
											value={user.address?.street || ''}
											onChange={handleAddressChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='city'>City:</label>
										<input
											type='text'
											name='city'
											value={user.address?.city || ''}
											onChange={handleAddressChange}
											className='form-control'
										/>
									</div>
									<div className='col-md-12 mb-3'>
										<StateCountrySelect
											selectedCountry={user.address?.country || ''}
											selectedState={user.address?.state || ''}
											onCountryChange={handleCountryChange}
											onStateChange={handleStateChange}
										/>
									</div>
									<div className='col-md-6 mb-3'>
										<label htmlFor='zipCode'>Zip Code:</label>
										<input
											type='text'
											name='zipCode'
											value={user.address?.zipCode || ''}
											onChange={handleAddressChange}
											className='form-control'
										/>
									</div>
								</div>
							</div>
							<div className='modal-footer'>
								<button type='button' className='btn btn-secondary' onClick={handleCloseModal}>
									Close
								</button>
								<button type='button' className='btn btn-primary' onClick={handleUpdateUser}>
									Save Changes
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default UserUpdateModal

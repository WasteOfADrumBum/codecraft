import React, { useState } from 'react'
import { StateCountrySelect, TransitLine } from '../../common'

const UserForm = ({ onSubmit, onCancel }) => {
	const [age, setAge] = useState(0)
	const [step, setStep] = useState(1)
	const [user, setUser] = useState({
		first: '',
		middle: '',
		last: '',
		email: '',
		username: '',
		password: '',
		age: '',
		dateOfBirth: '',
		bio: '',
		address: {
			street: '',
			city: '',
			state: '',
			country: '',
			zipCode: '',
		},
		profileImage: '',
	})
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target

		if (name === 'dateOfBirth') {
			const today = new Date()
			const dob = new Date(value)

			let calculatedAge = today.getFullYear() - dob.getFullYear()
			const monthDiff = today.getMonth() - dob.getMonth()

			if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
				calculatedAge--
			}

			setAge(calculatedAge)
		}

		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}))
	}

	const handleAddressChange = (e) => {
		const { name, value } = e.target
		setUser((prevUser) => ({
			...prevUser,
			address: {
				...prevUser.address,
				[name]: value,
			},
		}))
	}

	const handleNextStep = () => {
		const currentStep = validateStep(step)
		if (currentStep.isValid) {
			setStep((prevStep) => prevStep + 1)
			setErrors({})
		} else {
			setErrors(currentStep.errors)
		}
	}

	const handlePreviousStep = () => {
		setStep((prevStep) => prevStep - 1)
		setErrors({})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const currentStep = validateStep(step)
		if (currentStep.isValid) {
			onSubmit(user)
			setUser({
				first: '',
				middle: '',
				last: '',
				email: '',
				username: '',
				password: '',
				age: '',
				dateOfBirth: '',
				bio: '',
				address: {
					street: '',
					city: '',
					state: '',
					country: '',
					zipCode: '',
				},
				profileImage: '',
			})
			setStep(1)
			setErrors({})
		} else {
			setErrors(currentStep.errors)
		}
	}

	const handleCancel = () => {
		setUser({
			first: '',
			middle: '',
			last: '',
			email: '',
			username: '',
			password: '',
			age: '',
			dateOfBirth: '',
			bio: '',
			address: {
				street: '',
				city: '',
				state: '',
				country: '',
				zipCode: '',
			},
			profileImage: '',
		})
		setStep(1)
		setErrors({})
		onCancel()
	}

	const validateStep = (stepNumber) => {
		const currentStep = {
			isValid: true,
			errors: {},
		}

		switch (stepNumber) {
			case 1:
				if (!user.username || !user.email || !user.password) {
					currentStep.isValid = false
					currentStep.errors = {
						username: !user.username ? 'Username is required' : '',
						email: !user.email ? 'Email is required' : '',
						password: !user.password ? 'Password is required' : '',
					}
				}
				break
			case 2:
				if (!user.first || !user.last || !user.dateOfBirth) {
					currentStep.isValid = false
					currentStep.errors = {
						first: !user.first ? 'First Name is required' : '',
						last: !user.last ? 'Last Name is required' : '',
						dateOfBirth: !user.dateOfBirth ? 'Date of Birth is required' : '',
					}
				}
				break
			case 3:
				break
			default:
				break
		}

		return currentStep
	}

	const renderStep1 = () => (
		<div className='row'>
			<div className='cold-12 mb-3'>
				<label htmlFor='username' className='form-label'>
					Username:
				</label>
				<input
					type='text'
					name='username'
					value={user.username}
					onChange={handleChange}
					required
					className='form-control'
				/>
				{errors.username && <div className='text-danger'>{errors.username}</div>}
			</div>
			<div className='cold-12 mb-3'>
				<label htmlFor='email' className='form-label'>
					Email:
				</label>
				<input type='email' name='email' value={user.email} onChange={handleChange} required className='form-control' />
				{errors.email && <div className='text-danger'>{errors.email}</div>}
			</div>
			<div className='cold-12 mb-3'>
				<label htmlFor='password' className='form-label'>
					Password:
				</label>
				<input
					type='password'
					name='password'
					value={user.password}
					onChange={handleChange}
					required
					className='form-control'
				/>
				{errors.password && <div className='text-danger'>{errors.password}</div>}
			</div>
			<div className='d-flex justify-content-between'>
				<button type='button' className='btn btn-primary text-light' onClick={handleCancel}>
					Cancel
				</button>
				<button type='button' className='btn btn-primary text-light' onClick={handleNextStep}>
					Next
				</button>
			</div>
		</div>
	)

	const renderStep2 = () => (
		<div className='row'>
			<div className='col-md-4 mb-3'>
				<label htmlFor='first' className='form-label'>
					First Name:
				</label>
				<input type='text' name='first' value={user.first} onChange={handleChange} required className='form-control' />
				{errors.first && <div className='text-danger'>{errors.first}</div>}
			</div>
			<div className='col-md-4 mb-3'>
				<label htmlFor='middle' className='form-label'>
					Middle Name:
				</label>
				<input type='text' name='middle' value={user.middle} onChange={handleChange} className='form-control' />
			</div>
			<div className='col-md-4 mb-3'>
				<label htmlFor='last' className='form-label'>
					Last Name:
				</label>
				<input type='text' name='last' value={user.last} onChange={handleChange} required className='form-control' />
				{errors.last && <div className='text-danger'>{errors.last}</div>}
			</div>
			<div className='col-md-6 mb-3'>
				<label htmlFor='dob' className='form-label'>
					Date of Birth:
				</label>
				<input
					type='date'
					name='dateOfBirth'
					value={user.dateOfBirth}
					onChange={handleChange}
					required
					className='form-control'
				/>
				{errors.dateOfBirth && <div className='text-danger'>{errors.dateOfBirth}</div>}
			</div>
			<div className='col-md-6 mb-3'>
				<label htmlFor='age' className='form-label'>
					Age:
				</label>
				<input type='number' name='age' value={age} readOnly className='form-control' />
			</div>
			<div className='col-md-12 mb-3'>
				<label htmlFor='street' className='form-label'>
					Street:
				</label>
				<input
					type='text'
					name='street'
					value={user.address.street}
					onChange={handleAddressChange}
					className='form-control'
				/>
			</div>
			<div className='col-md-3 mb-3'>
				<label htmlFor='city' className='form-label'>
					City:
				</label>
				<input
					type='text'
					name='city'
					value={user.address.city}
					onChange={handleAddressChange}
					className='form-control'
				/>
			</div>
			<div className='col-md-6 mb-3'>
				<StateCountrySelect
					selectedCountry={user.address.country}
					selectedState={user.address.state}
					onCountryChange={(value) => handleAddressChange({ target: { name: 'country', value } })}
					onStateChange={(value) => handleAddressChange({ target: { name: 'state', value } })}
				/>
			</div>
			<div className='col-md-3 mb-3'>
				<label htmlFor='zipCode' className='form-label'>
					Zip Code:
				</label>
				<input
					type='text'
					name='zipCode'
					value={user.address.zipCode}
					onChange={handleAddressChange}
					className='form-control'
				/>
			</div>
			<div className='d-flex justify-content-between'>
				<button type='button' className='btn btn-primary text-light' onClick={handlePreviousStep}>
					Back
				</button>
				<button type='button' className='btn btn-primary text-light' onClick={handleNextStep}>
					Next
				</button>
			</div>
		</div>
	)

	const renderStep3 = () => (
		<div className='div'>
			<div className='col-12 mb-3'>
				<label htmlFor='bio' className='form-label'>
					Bio:
				</label>
				<textarea name='bio' value={user.bio} onChange={handleChange} className='form-control' />
			</div>
			<div className='col-12 mb-3'>
				<label htmlFor='profileImage' className='form-label'>
					Profile Image:
				</label>
				<input
					type='text'
					name='profileImage'
					value={user.profileImage}
					onChange={handleChange}
					className='form-control'
				/>
			</div>
			<div className='d-flex justify-content-between'>
				<button type='button' className='btn btn-primary text-light' onClick={handlePreviousStep}>
					Back
				</button>
				<button type='submit' className='btn btn-primary text-light'>
					Submit
				</button>
			</div>
		</div>
	)

	const renderCurrentStep = () => {
		switch (step) {
			case 1:
				return renderStep1()
			case 2:
				return renderStep2()
			case 3:
				return renderStep3()
			default:
				return null
		}
	}

	return (
		<>
			<TransitLine totalSteps={3} currentStep={step} stepTitles={['Login', 'Basic Info', 'Additional Information']} />
			<form onSubmit={handleSubmit}>{renderCurrentStep()}</form>
		</>
	)
}

export default UserForm

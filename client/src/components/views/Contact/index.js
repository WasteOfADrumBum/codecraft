import React, { useState } from 'react'
import { Header } from '../../layout'
import profileImg from '../../../assets/images/contact_img.jpg'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [errors, setErrors] = useState({ name: '', email: '', message: '' })

	const validateForm = () => {
		let newErrors = {}

		if (!name.trim()) {
			newErrors.name = 'Name is required'
		}

		if (!email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			newErrors.email = 'Invalid email format'
		}

		if (!message.trim()) {
			newErrors.message = 'Message is required'
		}

		setErrors(newErrors)

		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (validateForm()) {
			// Send the form data to the server or perform other actions
			console.log('Form submitted successfully')
			console.log('Name:', name)
			console.log('Email:', email)
			console.log('Message:', message)

			// Reset the form fields
			setName('')
			setEmail('')
			setMessage('')
			setErrors({})
		}
	}

	return (
		<>
			<Header icon='fas fa-envelope' header='Contact' subHeader="Please reachout! I'd love to hear from you." />
			<div className='row'>
				<div className='col-12 col-md-6'>
					<img src={profileImg} alt='Joshua M. Small' className='img-fluid rounded mb-4' />
				</div>
				<div className='col-12 col-md-6'>
					<form onSubmit={handleSubmit}>
						<div className='mb-3'>
							<label htmlFor='name' className='form-label'>
								Name:
							</label>
							<input
								type='text'
								id='name'
								className={`form-control ${errors.name ? 'is-invalid' : ''}`}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{errors.name && <div className='invalid-feedback'>{errors.name}</div>}
						</div>
						<div className='mb-3'>
							<label htmlFor='email' className='form-label'>
								Email:
							</label>
							<input
								type='email'
								id='email'
								className={`form-control ${errors.email ? 'is-invalid' : ''}`}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
						</div>
						<div className='mb-3'>
							<label htmlFor='message' className='form-label'>
								Message:
							</label>
							<textarea
								id='message'
								rows={8}
								className={`form-control ${errors.message ? 'is-invalid' : ''}`}
								value={message}
								onChange={(e) => setMessage(e.target.value)}></textarea>
							{errors.message && <div className='invalid-feedback'>{errors.message}</div>}
						</div>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Contact

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../api/userApis'
import { Header } from '../../layout'

const Login = () => {
	const navigate = useNavigate()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleLogin = async (e) => {
		e.preventDefault()

		try {
			const response = await loginUser(username, password)
			// Assuming the API response contains a JSON token upon successful login
			localStorage.setItem('token', response.token)
			navigate('/dashboard')
		} catch (error) {
			setError('Invalid username or password')
		}
	}

	return (
		<div>
			<Header icon='fas fa-sign-in-alt' header='Login' subHeader='Login to see more content.' />
			<form onSubmit={handleLogin} className='needs-validation' noValidate>
				<div className='mb-3'>
					<label htmlFor='username' className='form-label'>
						Username
					</label>
					<input
						type='text'
						className='form-control'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<div className='invalid-feedback'>Please enter a username.</div>
				</div>
				<div className='mb-3'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						type='password'
						className='form-control'
						id='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<div className='invalid-feedback'>Please enter a password.</div>
				</div>
				{error && <div className='text-danger'>{error}</div>}
				<button type='submit' className='btn btn-primary text-light'>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login

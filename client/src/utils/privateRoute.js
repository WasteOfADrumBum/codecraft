import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuthenticated = () => {
		return !!localStorage.getItem('token')
	}

	console.log('isAuthenticated:', isAuthenticated())

	return isAuthenticated() ? <Component {...rest} /> : <Navigate to='/login' replace />
}

export default PrivateRoute

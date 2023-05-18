import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { createRoot } from 'react-dom/client'
import './assets/styles/_global.scss'

// Components
import { About, App, Contact, Dashboard, Login, NotFound, Redux, UsersDashboard } from './components/views'
import { Navbar, Footer } from './components/layout'

// Helper function to check if the user is authenticated
const isAuthenticated = () => {
	// Implement your own logic to determine if the user is authenticated
	// e.g., check if the user is logged in or has a valid token
	// Return true or false accordingly
	return false
}

// Private route component
const PrivateRoute = ({ element: Element, ...rest }) => {
	return isAuthenticated() ? <Element /> : <Navigate to='/login' replace state={{ from: rest.location }} />
}

// Public route component
const PublicRoute = ({ element: Element, restricted, ...rest }) => {
	return isAuthenticated() && restricted ? <Navigate to='/dashboard' replace /> : <Element />
}

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Navbar />
			<div className='container-lg' style={{ marginBottom: '5rem' }}>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/login' element={<Login />} />
					<Route path='/redux' element={<Redux />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
					<Route path='/dashboard' element={<PrivateRoute element={<Dashboard />} />} />
					<Route path='/users' element={<UsersDashboard />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
		,
	</Provider>,
)

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import { createRoot } from 'react-dom/client'
import './assets/styles/_global.scss'

// Components
import { About, App, Contact, Dashboard, NotFound, Redux, Login } from './components/views'
import { Navbar, Footer } from './components/layout'
import PrivateRoute from './utils/privateRoute'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<div className='d-flex flex-column vh-100'>
				<Navbar />
				<div style={{ flex: '1 0 auto', paddingBottom: '60px' }}>
					<div className='container-lg' style={{ minHeight: 'calc(100vh - 60px)' }}>
						<Routes>
							<Route path='/' element={<App />} />
							<Route path='/login' element={<Login />} />
							<Route path='/redux' element={<Redux />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/about' element={<About />} />
							<Route path='/dashboard/*' element={<PrivateRoute component={Dashboard} />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>,
)

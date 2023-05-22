import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Sales, TensorFlow, UsersDashboard } from '../../views'
import { SidebarNav } from '../../layout'
import './_dashboard.scss'

const Dashboard = () => {
	return (
		<div className='row' id='Dashboard'>
			<div className='col-sm-12 col-md-1 col-lg-2 bg-light border border-top-0 border-primary'>
				<SidebarNav />
			</div>
			<div className='col-sm-12 col-md-11 col-lg-10'>
				{/* Dashboard content here */}
				<Routes>
					<Route path='users/*' element={<UsersDashboard />} />
					<Route path='tensorflow/*' element={<TensorFlow />} />
					<Route path='sales/*' element={<Sales />} />
				</Routes>
			</div>
		</div>
	)
}

export default Dashboard


import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const location = useLocation()
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const isLgSize = windowWidth >= 992
	const isMdSize = windowWidth >= 768 && windowWidth < 992

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	const closeDropdown = () => {
		setIsDropdownOpen(false)
	}

	const renderSidebarContent = () => {
		if (isLgSize) {
			return (
				<ul className='nav flex-column mt-5'>
					<li className='nav-item'>
						<NavLink
							to='/dashboard'
							className={`nav-link mb-2 border-bottom border-primary ${
								location.pathname === '/dashboard' && 'text-info'
							}`}>
							<i className='fas fa-tachometer-alt me-1' />
							<span>Dashboard</span>
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='/dashboard/users'
							className={`nav-link mb-2 ${location.pathname === '/dashboard/users' && 'text-info'}`}>
							<i className='fa fa-users me-1' />
							<span>Users</span>
						</NavLink>
					</li>
				</ul>
			)
		} else if (isMdSize) {
			return (
				<ul className='nav flex-column mt-5'>
					<li className='nav-item'>
						<NavLink
							to='/dashboard'
							className={`nav-link mb-2 border-bottom border-primary ${
								location.pathname === '/dashboard' && 'text-info'
							}`}>
							<i className='fas fa-tachometer-alt me-1' />
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='/dashboard/users'
							className={`nav-link mb-2 ${location.pathname === '/dashboard/users' && 'text-info'}`}>
							<i className='fa fa-users me-1' />
						</NavLink>
					</li>
				</ul>
			)
		} else {
			return (
				<ul className='navbar-nav bg-light px-2'>
					<li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
						<div className='nav-link dropdown-toggle' role='button' onClick={toggleDropdown}>
							<i className='fa fa-bars me-1 text-dark' />
							<span className='ms-1 text-dark'>Menu</span>
						</div>
						<ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
							<li>
								<NavLink
									to='/dashboard'
									className={`dropdown-item ${location.pathname === '/dashboard' && 'text-info'}`}
									onClick={closeDropdown}>
									<i className='fas fa-tachometer-alt me-1' />
									<span className='ms-1'>Dashboard</span>
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/dashboard/users'
									className={`dropdown-item ${location.pathname === '/dashboard/users' && 'text-info'}`}
									onClick={closeDropdown}>
									<i className='fa fa-users me-1' />
									<span className='ms-1'>Users</span>
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			)
		}
	}

	return <nav className='sidebar'>{renderSidebarContent()}</nav>
}

export default Sidebar

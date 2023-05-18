import React from 'react'
import { Link } from 'react-router-dom'
import './_navbar.scss'

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top' data-bs-theme='dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<i className='fa-brands fa-react me-2' />
					CodeCraft
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								<i className='fas fa-home' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								<i className='fas fa-info' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/redux'>
								<i className='fab fa-react' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/dashboard'>
								<i className='fas fa-tachometer-alt' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								<i className='fas fa-envelope' />
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/login'>
								<i className='fas fa-sign-in-alt' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

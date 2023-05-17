import React from 'react'
import { Link } from 'react-router-dom'
import './_footer.scss'

const Footer = () => {
	return (
		<footer
			className='d-flex justify-content-between align-items-center py-3 mt-4 px-4 border-top fixed-bottom bg-body-tertiary'
			data-bs-theme='dark'>
			<div className='col-md-4 d-flex align-items-center'>
				<Link
					to='/'
					className='mb-3 me-2 mb-md-0 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover lh-1'>
					<i className='fab fa-bootstrap me-1'></i>
				</Link>
				<span className='mb-3 mb-md-0 text-secondary'>© 2023 Joshua M. Small</span>
			</div>
			<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
				<li className='ms-3'>
					<a
						className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
						href='https://www.linkedin.com/in/joshuamsmall/'>
						<i className='fab fa-linkedin' />
					</a>
				</li>
				<li className='ms-3'>
					<a
						className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
						href='https://github.com/WasteOfADrumBum'>
						<i className='fab fa-github' />
					</a>
				</li>
				<li className='ms-3'>
					<a
						className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
						href='https://www.instagram.com/one_small_family/'>
						<i className='fab fa-instagram' />
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer

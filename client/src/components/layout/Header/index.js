import React from 'react'
import './_header.scss'

const Header = ({ icon, header, subHeader }) => {
	return (
		<header className='text-primary text-start pt-5 pb-2 mb-5 border-bottom border-danger'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 d-flex flex-row align-items-center justify-content-start'>
						{icon && <i className={`${icon} fa-3x me-3`} />}
						{header && <h1 className='display-4 fw-bold text-uppercase mb-0'>{header}</h1>}
					</div>
				</div>
				{subHeader && <p className='lead'>{subHeader}</p>}
			</div>
		</header>
	)
}

export default Header

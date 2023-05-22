import React from 'react'

const SubHeader = ({ icon, title, description }) => {
	return (
		<div className='container mb-4' id='SubHeader'>
			<figure className='row mt-4 mb-2 border-bottom border-primary'>
				<blockquote className='blockquote col-12 d-flex flex-row align-items-center text-info'>
					{icon && <i className={`${icon} me-3`} />}
					<p>{title}</p>
				</blockquote>
				{description && (
					<figcaption className='blockquote-footer col-12 text-warning'>
						<cite title='Source Title'>{description}</cite>
					</figcaption>
				)}
			</figure>
		</div>
	)
}

export default SubHeader

import React from 'react'

const TransitLine = ({ totalSteps, currentStep, stepTitles }) => {
	return (
		<div className='progress my-5'>
			{[...Array(totalSteps)].map((_, index) => (
				<div
					key={index + 1}
					className={`progress-bar ${index + 1 === currentStep ? 'bg-success' : ''}`}
					role='progressbar'
					style={{ width: `${(100 / totalSteps) * (index + 1)}%` }}
					aria-valuenow={index + 1}
					aria-valuemin='1'
					aria-valuemax={totalSteps}>
					{stepTitles[index]}
				</div>
			))}
		</div>
	)
}

export default TransitLine

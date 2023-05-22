import React from 'react'
import { Header } from '../../layout'
import { PredictionForm } from '../../common'

const TensorFlow = () => {
	return (
		<div className='TensorFlow'>
			<Header icon='fas fa-robot' header='TensorFlow' subHeader='' />
			<div className='row'>
				<div className='col-12'>
					<PredictionForm />
				</div>
			</div>
		</div>
	)
}

export default TensorFlow

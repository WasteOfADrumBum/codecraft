import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import predictionReducer from './tensorflowReducer'
import salesReducer from './salesReducer'

const rootReducer = combineReducers({
	counter: counterReducer,
	prediction: predictionReducer,
	sales: salesReducer,
	// add more reducers if needed
})

export default rootReducer

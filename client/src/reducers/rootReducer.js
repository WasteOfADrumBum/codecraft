import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
	counter: counterReducer,
	// add more reducers if needed
})

export default rootReducer

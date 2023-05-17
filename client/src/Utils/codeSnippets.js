// codeSnippets.js

export const codeSnippets = {
	codeStep1: `// store.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export default store`,

	codeStep2: `// counterReducer.js
import { createSlice } from '@reduxjs/toolkit'

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = counterReducer.actions
export default counterReducer.reducer`,

	codeStep3: `// rootReducer.js
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  // add more reducers if needed
})

export default rootReducer`,

	codeStep4: `// counterActions.js
export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}`,

	codeStep5: `// App.js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../../reducers/counterReducer'

const App = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div id='counterExample' className='text-center'>
        <h2>Counter: {count}</h2>
        <button className='btn btn-danger mx-1' onClick={() => dispatch(decrement())}>
          <i className='fas fa-minus text-light' />
        </button>
        <button className='btn btn-success mx-1' onClick={() => dispatch(increment())}>
          <i className='fas fa-plus text-light' />
        </button>
      </div>
    </div>
  )
}

export default App`,

	codeStep6: `// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)`,
}

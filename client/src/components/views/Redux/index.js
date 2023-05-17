import React from 'react'
import { Header } from '../../layout'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../../reducers/counterReducer'
import { CopyBlock } from 'react-code-blocks'
import copy from 'copy-to-clipboard'
import { codeSnippets } from '../../../Utils/codeSnippets'

const Redux = () => {
	const count = useSelector((state) => state.counter.count)
	const dispatch = useDispatch()

	// CodeBlock Theme
	const myCustomTheme = {
		lineNumberColor: '#ffffff',
		lineNumberBgColor: '#2b3036',
		backgroundColor: '#000000',
		textColor: '#ffffff',
		substringColor: '#f2be5c',
		keywordColor: '#a856bf',
		attributeColor: '#f2955e',
		selectorTagColor: '#a856bf',
		docTagColor: '#2ef2df',
		nameColor: '#ffffff',
		builtInColor: '#a856bf',
		literalColor: '#f2955e',
		bulletColor: '#f2955e',
		codeColor: '#ffffff',
		additionColor: '#f2be5c',
		regexpColor: '#ffffff',
		symbolColor: '#f2955e',
		variableColor: '#f2955e',
		templateVariableColor: '#f2955e',
		linkColor: '#2ef2df',
		selectorAttributeColor: '#f2955e',
		selectorPseudoColor: '#2ef2df',
		typeColor: '#a856bf',
		stringColor: '#f2be5c',
		selectorIdColor: '#f2955e',
		quoteColor: '#ffffff',
		templateTagColor: '#ffffff',
		deletionColor: '#ff0000',
		titleColor: '#a856bf',
		sectionColor: '#a856bf',
		commentColor: '#ffffff',
		metaKeywordColor: '#ffffff',
		metaColor: '#2ef2df',
		functionColor: '#a856bf',
		numberColor: '#f2955e',
	}

	return (
		<div className='Redux'>
			<Header
				icon='fab fa-react'
				header='Redux'
				subHeader='Integrate React with Redux to manage and update your application state.'
			/>
			{/* Step 1 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Set up your Redux store</span>: Create a Redux store using the createStore
							function from Redux or the configureStore function from Redux Toolkit. This is where your application
							state will be stored.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep1}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep1)}
					/>
				</div>
			</div>
			{/* Step 2 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Create reducers</span>: Define reducer functions that specify how the state
							should be updated in response to actions. Redux reducers are pure functions that take the current state
							and an action as arguments and return a new state.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep2}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep2)}
					/>
				</div>
			</div>
			{/* Step 3 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Combine reducers</span>: Use the combineReducers function from Redux to
							combine multiple reducers into a single root reducer. This allows you to handle different parts of the
							state with separate reducer functions.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep3}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep3)}
					/>
				</div>
			</div>
			{/* Step 4 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Create actions</span>: Define action creators, which are functions that
							create actions. Actions are plain JavaScript objects that describe the type of action being performed and
							any associated data.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep4}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep4)}
					/>
				</div>
			</div>
			{/* Step 5 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Create components</span>: Build your React components that will interact
							with the Redux store. These components can access the store's state and dispatch actions using React Redux
							hooks like useSelector and useDispatch.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep5}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep5)}
					/>
				</div>
			</div>
			{/* Step 6 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Connect components to the store</span>: Use the Provider component from
							React Redux to wrap your application's root component and provide access to the Redux store throughout the
							component hierarchy.
						</li>
					</ul>
				</div>
				<div className='col-md-6'>
					<CopyBlock
						text={codeSnippets.codeStep6}
						language={'javascript'}
						showLineNumbers={true}
						wrapLines={true}
						theme={myCustomTheme}
						codeBlock
						icon={null}
						onCopy={() => copy(codeSnippets.codeStep6)}
					/>
				</div>
			</div>
			{/* Step 7 */}
			<div className='row mb-2'>
				<div className='col-md-6'>
					<ul>
						<li className='mb-2'>
							<span className='text-primary'>Access state and dispatch actions</span>: Inside your components, use the
							useSelector hook to access the state from the Redux store, and use the useDispatch hook to dispatch
							actions to update the state.
						</li>
						<li className='mb-2'>
							<span className='text-primary'>Dispatch actions</span>: Trigger actions by calling the action creators and
							dispatching them using the dispatch function provided by useDispatch. This will update the state in the
							Redux store.
						</li>
						<li className='mb-2'>
							<span className='text-primary'>Update state and trigger re-renders</span>: As actions are dispatched, the
							reducers will handle them and update the state in the Redux store. React Redux will detect the changes and
							trigger re-renders of the components that depend on the updated state.
						</li>
					</ul>
				</div>
				<div className='col-md-6 d-flex align-items-center justify-content-center'>
					{/* Example */}
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
			</div>
		</div>
	)
}

export default Redux

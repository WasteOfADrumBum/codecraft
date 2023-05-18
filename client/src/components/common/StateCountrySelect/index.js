import React from 'react'

const getCountries = () => [
	{ value: 'usa', label: 'United States' },
	{ value: 'canada', label: 'Canada' },
	// Add more country options as needed
]

const getStates = (country) => {
	switch (country) {
		case 'usa':
			return [
				{ value: 'al', label: 'Alabama' },
				{ value: 'ak', label: 'Alaska' },
				{ value: 'az', label: 'Arizona' },
				{ value: 'ar', label: 'Arkansas' },
				{ value: 'ca', label: 'California' },
				{ value: 'co', label: 'Colorado' },
				{ value: 'ct', label: 'Connecticut' },
				{ value: 'de', label: 'Delaware' },
				{ value: 'fl', label: 'Florida' },
				{ value: 'ga', label: 'Georgia' },
				{ value: 'hi', label: 'Hawaii' },
				{ value: 'id', label: 'Idaho' },
				{ value: 'il', label: 'Illinois' },
				{ value: 'in', label: 'Indiana' },
				{ value: 'ia', label: 'Iowa' },
				{ value: 'ks', label: 'Kansas' },
				{ value: 'ky', label: 'Kentucky' },
				{ value: 'la', label: 'Louisiana' },
				{ value: 'me', label: 'Maine' },
				{ value: 'md', label: 'Maryland' },
				{ value: 'ma', label: 'Massachusetts' },
				{ value: 'mi', label: 'Michigan' },
				{ value: 'mn', label: 'Minnesota' },
				{ value: 'ms', label: 'Mississippi' },
				{ value: 'mo', label: 'Missouri' },
				{ value: 'mt', label: 'Montana' },
				{ value: 'ne', label: 'Nebraska' },
				{ value: 'nv', label: 'Nevada' },
				{ value: 'nh', label: 'New Hampshire' },
				{ value: 'nj', label: 'New Jersey' },
				{ value: 'nm', label: 'New Mexico' },
				{ value: 'ny', label: 'New York' },
				{ value: 'nc', label: 'North Carolina' },
				{ value: 'nd', label: 'North Dakota' },
				{ value: 'oh', label: 'Ohio' },
				{ value: 'ok', label: 'Oklahoma' },
				{ value: 'or', label: 'Oregon' },
				{ value: 'pa', label: 'Pennsylvania' },
				{ value: 'ri', label: 'Rhode Island' },
				{ value: 'sc', label: 'South Carolina' },
				{ value: 'sd', label: 'South Dakota' },
				{ value: 'tn', label: 'Tennessee' },
				{ value: 'tx', label: 'Texas' },
				{ value: 'ut', label: 'Utah' },
				{ value: 'vt', label: 'Vermont' },
				{ value: 'va', label: 'Virginia' },
				{ value: 'wa', label: 'Washington' },
				{ value: 'wv', label: 'West Virginia' },
				{ value: 'wi', label: 'Wisconsin' },
				{ value: 'wy', label: 'Wyoming' },
			]
		case 'canada':
			return [
				{ value: 'ab', label: 'Alberta' },
				{ value: 'bc', label: 'British Columbia' },
				{ value: 'mb', label: 'Manitoba' },
				{ value: 'nb', label: 'New Brunswick' },
				{ value: 'nl', label: 'Newfoundland and Labrador' },
				{ value: 'ns', label: 'Nova Scotia' },
				{ value: 'on', label: 'Ontario' },
				{ value: 'pe', label: 'Prince Edward Island' },
				{ value: 'qc', label: 'Quebec' },
				{ value: 'sk', label: 'Saskatchewan' },
				{ value: 'nt', label: 'Northwest Territories' },
				{ value: 'nu', label: 'Nunavut' },
				{ value: 'yt', label: 'Yukon' },
			]
		default:
			return []
	}
}

const StateCountrySelect = ({ selectedCountry, selectedState, onCountryChange, onStateChange }) => {
	const states = getStates(selectedCountry)

	const handleCountryChange = (e) => {
		const selectedCountry = e.target.value
		onCountryChange(selectedCountry)
		onStateChange('')
	}

	const handleStateChange = (e) => {
		const selectedState = e.target.value
		onStateChange(selectedState)
	}

	return (
		<div className='row'>
			<div className='col-md-6 mb-3'>
				<label htmlFor='country' className='form-label'>
					Country:
				</label>
				<select id='country' className='form-control' value={selectedCountry} onChange={handleCountryChange}>
					<option value=''>Select a country</option>
					{getCountries().map((country) => (
						<option key={country.value} value={country.value}>
							{country.label}
						</option>
					))}
				</select>
			</div>
			<div className='col-md-6 mb-3'>
				<label htmlFor='state' className='form-label'>
					State:
				</label>
				<select id='state' className='form-control' value={selectedState} onChange={handleStateChange}>
					<option value=''>Select a state</option>
					{states.map((state) => (
						<option key={state.value} value={state.value}>
							{state.label}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default StateCountrySelect

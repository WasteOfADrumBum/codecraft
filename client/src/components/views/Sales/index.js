import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header, SubHeader } from '../../layout'
import { getAllSales } from '../../../actions/salesActions'
import { DonutChart, LineGraphChart, ScatterPlotChart } from '../../common'

const Sales = () => {
	const sales = useSelector((state) => state.sales)
	const dispatch = useDispatch()
	const [sortedSales, setSortedSales] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 15
	const [sortField, setSortField] = useState('')
	const [sortOrder, setSortOrder] = useState('asc')
	const [activeTab, setActiveTab] = useState('lineGraph')

	useEffect(() => {
		// Fetch all sales data when the component mounts
		dispatch(getAllSales())
	}, [dispatch])

	useEffect(() => {
		// Update sortedSales whenever sales data changes
		setSortedSales(sales)
	}, [sales])

	const handleSort = (field) => {
		// Toggle the sort order when the same field is clicked
		if (field === sortField) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
		} else {
			// Reset the sort order if a different field is clicked
			setSortOrder('asc')
		}

		setSortField(field)
	}

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	// Sort the sales array based on the selected field and order
	const sortedData = [...sortedSales].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a[sortField] > b[sortField] ? 1 : -1
		} else {
			return a[sortField] < b[sortField] ? 1 : -1
		}
	})

	// Calculate pagination values
	const totalItems = sortedData.length
	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage

	// Get the current page of sales data
	const paginatedSales = sortedData.slice(startIndex, endIndex)

	const handleTabChange = (tab) => {
		setActiveTab(tab)
	}

	return (
		<div className='Sales'>
			<Header icon='fas fa-code' header='Sales' subHeader='' />
			<div className='row'>
				<div className='col-12'>
					{sales.length === 0 ? (
						<p>No sales data available</p>
					) : (
						<table className='table table-striped table-hover '>
							<thead>
								<tr className='table-primary fw-bold text-dark border-bottom border-primary'>
									<th scope='col' style={{ width: '15%' }} onClick={() => handleSort('_id')}>
										Transaction #
										{sortField === '_id' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
									<th scope='col' style={{ width: '25%' }} onClick={() => handleSort('product')}>
										Product Description
										{sortField === 'product' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
									<th scope='col' style={{ width: '15%' }} onClick={() => handleSort('quantity')}>
										Quantity
										{sortField === 'quantity' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
									<th scope='col' style={{ width: '15%' }} onClick={() => handleSort('price')}>
										Price
										{sortField === 'price' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
									<th scope='col' style={{ width: '15%' }} onClick={() => handleSort('customer')}>
										Customer #
										{sortField === 'customer' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
									<th scope='col' style={{ width: '15%' }} onClick={() => handleSort('date')}>
										Date
										{sortField === 'date' && <span className='chevron'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
									</th>
								</tr>
							</thead>
							<tbody>
								{paginatedSales.map((sale) => (
									<tr key={sale._id}>
										<th scope='row' className='pe-auto'>
											{sale._id.slice(-4).toUpperCase()}
										</th>
										<td>{sale.product}</td>
										<td>{sale.quantity}</td>
										<td>${sale.price.toFixed(2)}</td>
										<td>{sale.customer.slice(-4).toUpperCase()}</td>
										<td>{sale.date.substring(0, 10)}</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
					{totalItems > itemsPerPage && (
						<nav aria-label='Sales pagination'>
							<ul className='pagination'>
								{Array.from(Array(totalPages), (_, i) => (
									<li
										key={i}
										className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
										onClick={() => handlePageChange(i + 1)}>
										<span className='page-link'>{i + 1}</span>
									</li>
								))}
							</ul>
						</nav>
					)}
				</div>
			</div>
			<SubHeader icon='fas fa-code' title='Graphs' description='' />
			<div className='row'>
				<div className='col-12 mb-3'>
					<ul className='nav nav-tabs'>
						<li className='nav-item'>
							<button
								className={`nav-link ${activeTab === 'lineGraph' ? 'active' : ''}`}
								onClick={() => handleTabChange('lineGraph')}>
								Monthly Sales Trend
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${activeTab === 'scatterPlot' ? 'active' : ''}`}
								onClick={() => handleTabChange('scatterPlot')}>
								Price vs Quantity
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${activeTab === 'donutChart' ? 'active' : ''}`}
								onClick={() => handleTabChange('donutChart')}>
								Product Comparison
							</button>
						</li>
					</ul>
				</div>
				<div className='col-12 mb-3'>
					{activeTab === 'lineGraph' && (
						<>
							<h2 className='my-2 text-uppercase ms-3 text-muted fw-bold'>Monthly Sales Trend</h2>
							<LineGraphChart data={sales} />
						</>
					)}
					{activeTab === 'scatterPlot' && (
						<>
							<h2 className='my-2 text-uppercase ms-3 text-muted fw-bold'>Price vs Quantity</h2>
							<ScatterPlotChart data={sales} />
						</>
					)}
					{activeTab === 'donutChart' && (
						<>
							<h2 className='my-2 text-uppercase ms-3 text-muted fw-bold'>Product Comparison</h2>
							<DonutChart data={sales} />
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Sales


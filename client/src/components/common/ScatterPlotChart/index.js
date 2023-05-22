import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const ScatterPlotChart = ({ data }) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d')

		const chart = new Chart(ctx, {
			type: 'scatter',
			data: {
				datasets: [
					{
						label: 'Price vs Quantity',
						data: data.map((sale) => ({ x: sale.quantity, y: sale.price.toFixed(2) })),
						backgroundColor: '#2ef2df',
					},
				],
			},
			options: {
				scales: {
					x: {
						display: true,
						title: {
							display: true,
							text: 'Quantity',
						},
					},
					y: {
						display: true,
						title: {
							display: true,
							text: 'Price',
						},
					},
				},
			},
		})

		return () => {
			chart.destroy()
		}
	}, [data])

	return <canvas ref={chartRef} />
}

export default ScatterPlotChart

import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const DonutChart = ({ data }) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d')

		const labels = data.map((sale) => sale.product)
		const quantities = data.map((sale) => sale.quantity)
		const backgroundColors = ['#a856bf', '#2ef2df', '#f2be5c', '#f2955e', '#ffffff', '#ff0000']

		const chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: labels,
				datasets: [
					{
						data: quantities,
						backgroundColor: backgroundColors,
					},
				],
			},
			options: {
				plugins: {
					legend: {
						position: 'right',
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

export default DonutChart

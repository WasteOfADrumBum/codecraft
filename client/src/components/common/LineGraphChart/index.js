import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const LineGraphChart = ({ data }) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d')

		const groupedData = {}
		for (const obj of data) {
			const monthYear = new Date(obj.date).toLocaleString('default', { month: 'short', year: 'numeric' })
			if (!groupedData[monthYear]) {
				groupedData[monthYear] = 0
			}
			groupedData[monthYear] += obj.price
		}

		const newArr = Object.keys(groupedData).map((key) => ({
			label: key,
			value: groupedData[key],
		}))

		newArr.sort((a, b) => {
			const dateA = new Date(a.label)
			const dateB = new Date(b.label)
			return dateA - dateB
		})

		const labels = newArr.map((item) => item.label)
		const prices = newArr.map((item) => item.value)

		const chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Sales Trend',
						data: prices,
						backgroundColor: '#a856bf',
						borderColor: '#a856bf',
						fill: false,
					},
				],
			},
			options: {
				scales: {
					x: {
						display: true,
						title: {
							display: true,
							text: 'Month',
						},
					},
					y: {
						display: true,
						title: {
							display: true,
							text: 'Sales',
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

export default LineGraphChart

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

const BarChart = ({ chartData, chartOptions }) => {
    const [data, setData] = useState([])
    const [options, setOptions] = useState({})

    useEffect(() => {
        setData(chartData)
        setOptions(chartOptions)
    }, [chartData, chartOptions])

    return <Chart options={options} series={data} type="bar" width="100%" height="100%" />
}

export default BarChart

/* eslint-disable react/prop-types */
import Chart from 'react-apexcharts'

const LineChart = (props) => {
    const { series, options, type } = props

    return <Chart options={options} type={type} width="100%" height="100%" series={series} />
}

export default LineChart

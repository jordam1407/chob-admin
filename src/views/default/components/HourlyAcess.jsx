import { lineChartDataHourlyLeads } from '../../../variables/charts'
import { lineChartOptionsHourlyLeads } from '../../../variables/charts'
import { MdArrowDropUp } from 'react-icons/md'
import Card from '../../../componentes/card'
import { useState } from 'react'
import { getCurrentDate } from '../../../utils/date.utils'
import LineChart from '../../../componentes/charts/LineChart'
const HourlyAcess = () => {
    const [date, setDate] = useState(getCurrentDate())

    return (
        <Card extra="pb-7 p-[20px]">
            <div className="flex flex-row justify-between">
                <div className="ml-1 pt-2">
                    <p className="font-medium leading-4 text-gray-600 dark:text-gray-300">Leads por Hora</p>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={({ target }) => setDate(target.value)}
                        className="text-sm mt-2 px-4 py-2 w-fit border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mt-2 flex items-start">
                    <div className="flex items-center text-sm text-green-500">
                        <MdArrowDropUp className="h-5 w-5" />
                        <p className="font-bold"> +2.45% </p>
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full pt-10 pb-0">
                <LineChart options={lineChartOptionsHourlyLeads} series={lineChartDataHourlyLeads} type="line" />
            </div>
        </Card>
    )
}

export default HourlyAcess

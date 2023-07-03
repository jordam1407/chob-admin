import { barChartDataHourlyLeads } from '../../../variables/charts'
import { barChartOptionsHourlyLeads } from '../../../variables/charts'
import { MdArrowDropUp, MdOutlineCalendarToday } from 'react-icons/md'
import Card from '../../../componentes/card'
import BarChart from '../../../componentes/charts/BarChart'
const HourlyAcess = () => {
    return (
        <Card extra="pb-7 p-[20px]">
            <div className="flex flex-row justify-between">
                <div className="ml-1 pt-2">
                    <p className="text-sm font-medium leading-4 text-gray-600">Leads por Hora</p>
                    <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:hover:opacity-90 dark:active:opacity-80 dark:text-gray-100">
                        <MdOutlineCalendarToday />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-100">Hoje</span>
                    </button>
                </div>
                <div className="mt-2 flex items-start">
                    <div className="flex items-center text-sm text-green-500">
                        <MdArrowDropUp className="h-5 w-5" />
                        <p className="font-bold"> +2.45% </p>
                    </div>
                </div>
            </div>

            <div className="h-[300px] w-full pt-10 pb-0">
                <BarChart chartData={barChartDataHourlyLeads} chartOptions={barChartOptionsHourlyLeads} />
            </div>
        </Card>
    )
}

export default HourlyAcess

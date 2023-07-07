import React from 'react'
import { MdBarChart } from 'react-icons/md'
import Card from '../../../componentes/card'
import { lineChartDataFlow, lineChartOptionsFlow } from '../../../variables/charts'
import LineChart from '../../../componentes/charts/LineChart'

const DailyChats = () => {
    return (
        <Card extra="!p-[20px] text-center min-h-[550px]">
            <div className="flex justify-between">
                <p className="font-medium text-gray-600 dark:text-gray-300 align-middle my-auto">
                    Perda de interesse por etapa
                </p>
                <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-white/20 dark:active:bg-white/10">
                    <MdBarChart className="h-6 w-6" />
                </button>
            </div>

            <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
                <div className="h-full w-full">
                    <LineChart options={lineChartOptionsFlow} series={lineChartDataFlow} type="area" />
                </div>
            </div>
        </Card>
    )
}

export default DailyChats

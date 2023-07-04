/* eslint-disable react/prop-types */
import { MdArrowDropUp } from 'react-icons/md'
import Card from '../card'

const Widget = ({ icon, title, subtitle, percentage }) => {
    return (
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-gray-700">
                    <span className="flex items-center text-orange-600">{icon}</span>
                </div>
            </div>

            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <div className="flex my-auto flex-row items-center">
                    <h4 className="text-xl font-bold text-gray-700 dark:text-gray-100">{subtitle}</h4>
                    {percentage && (
                        <div className="flex mx-2">
                            <MdArrowDropUp className="font-medium text-green-500 my-auto" />
                            <p className="text-sm font-bold text-green-500"> +2.45% </p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default Widget

/* eslint-disable react/prop-types */
import Card from '../card'

const Widget = ({ icon, title, subtitle }) => {
    return (
        <Card extra="!flex-row flex-grow items-center rounded-[20px]">
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
                <div className="rounded-full bg-lightPrimary p-3 dark:bg-gray-700">
                    <span className="flex items-center text-orange-600">{icon}</span>
                </div>
            </div>

            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <h4 className="text-xl font-bold text-gray-700 dark:text-gray-100">{subtitle}</h4>
            </div>
        </Card>
    )
}

export default Widget

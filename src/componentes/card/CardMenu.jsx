/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from 'react'
import Dropdown from '../Admin/dropdown'

function CardMenu(props) {
    const { transparent, icon, items } = props
    const [open, setOpen] = React.useState(false)
    return (
        <Dropdown
            button={
                <button
                    onClick={() => setOpen(!open)}
                    open={open}
                    className={`flex items-center text-xl hover:cursor-pointer ${
                        transparent
                            ? 'bg-none text-white hover:bg-none active:bg-none'
                            : 'bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'
                    } linear justify-center rounded-lg font-bold transition duration-200`}>
                    {icon}
                </button>
            }
            animation={'origin-top-right transition-all duration-300 ease-in-out'}
            classNames={`${transparent ? 'top-8' : 'top-11'} right-0 w-max`}
            children={
                <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-gray-700 dark:shadow-none">
                    {items?.map(({ icon, text }) => (
                        <p
                            key={text}
                            className="hover:text-gray-400 flex cursor-pointer items-center gap-2 text-gray-200 hover:font-medium my-1">
                            <span>{icon}</span>
                            {text}
                        </p>
                    ))}
                </div>
            }
        />
    )
}

export default CardMenu

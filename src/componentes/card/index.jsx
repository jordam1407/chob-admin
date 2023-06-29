/* eslint-disable react/prop-types */
function Card(props) {
    const { extra, children } = props
    return (
        <div
            className={`!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-gray-900 dark:text-white dark:shadow-none ${extra}`}>
            {children}
        </div>
    )
}

export default Card

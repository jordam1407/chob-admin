export function getLast7Days() {
    const currentDate = new Date()
    const dates = []

    for (let i = 6; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - i)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const formattedDate = `${day}/${month}`
        dates.push(formattedDate)
    }

    return dates
}

export function getTimeDifference(dateString) {
    const targetDate = new Date(dateString)
    const currentTime = new Date()

    const differenceInMilliseconds = currentTime - targetDate
    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60))

    if (differenceInMinutes >= 60) {
        const differenceInHours = Math.floor(differenceInMinutes / 60)
        const remainingMinutes = differenceInMinutes % 60

        if (remainingMinutes === 0) {
            return `${differenceInHours}h`
        } else {
            return `${differenceInHours}h ${remainingMinutes}min`
        }
    } else {
        return `${differenceInMinutes}min`
    }
}

export function getCurrentDate() {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

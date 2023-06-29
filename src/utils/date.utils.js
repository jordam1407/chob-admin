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

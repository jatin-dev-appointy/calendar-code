const monthMap = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

export const dateToday = () => {
    return new Date()
}

export const daysInMonth = (d) => {
    return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate()
}

export const dayOneDate = (d) => {
    return new Date(d.getFullYear(), d.getMonth(), 1)
}

export const dayOneValue = (d) => {
    return dayOneDate(d).getDay()
}

export const getFullDateString = (d) => {
    return `${d.getDate()} ${monthMap[d.getMonth()]}, ${d.getFullYear()}`
}

export const getFullMonthString = (d) => {
    return `${monthMap[d.getMonth()]}, ${d.getFullYear()}`
}

export const getPreviousMonth = (d) => {
    const prevMonthDate = new Date(d)
    prevMonthDate.setMonth(prevMonthDate.getMonth()-1)
    return prevMonthDate
}

export const getNextMonth = (d) => {
    const nextMonthDate = new Date(d)
    nextMonthDate.setMonth(nextMonthDate.getMonth()+1)
    return nextMonthDate
}
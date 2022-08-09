import {generateTable} from "../../../helpers/table.js";
import {dayOneDate, dayOneValue, daysInMonth, getFullDateString, getNextMonth} from "../../../helpers/dateTime.js";
import {regenerateCalendar, setSelectedDate} from "../../../helpers/index.js";
import {eventMap} from "../../../store/calendar.js";

export const SingleTable  = (d, clsList) => {
    const SingleTableElement = generateTable(calculateRowsForTable(d)+1, 7)
    clsList.forEach(cls => {
        SingleTableElement.classList.add(cls)
    })

    let isSubTable = false
    if(SingleTableElement.classList.contains('calendar-sub-table')){
        isSubTable = true
    }

    fillCalendarHeaders(SingleTableElement, isSubTable)
    fillCalendarDates(SingleTableElement, d)

    return SingleTableElement
}

const fillCalendarHeaders = (tableElement, isSubTable) => {
    const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const firstRowElem = tableElement.children[0]
    for(let i=0;i<7;i++){
        const blockElem = firstRowElem.children[i]
        blockElem.classList.add('pd-5')
        if(isSubTable) {
            blockElem.innerText = dayMap[i][0]
            continue
        }
        blockElem.innerText = dayMap[i]
    }
}

const fillCalendarDates = (tableElement, d) => {
    let currentRowNum = 1
    let currentColNum = dayOneValue(d)

    let currentDate = dayOneDate(d)
    const lastDate = getNextMonth(dayOneDate(d))

    for(;currentDate<lastDate; currentColNum++){
        if(currentColNum===7) {
            currentRowNum++
            currentColNum = 0
        }

        const currentRowElem = tableElement.children[currentRowNum]
        const currentColElem = currentRowElem.children[currentColNum]

        currentColElem.appendChild(dateBlock(currentDate))
        currentColElem.dataset.fullDateString = currentDate.toString()
        currentColElem.className = 'calendar-date-blocks'
        currentColElem.classList.add('pd-5')

        currentColElem.addEventListener('click', () => {
            const dt = new Date(currentColElem.dataset.fullDateString)
            setSelectedDate(dt)
            console.log(dt)
            regenerateCalendar(dayOneDate(dt))
        })

        currentDate.setDate(currentDate.getDate()+1)
    }
}

const dateBlock = (d) => {
    const dateBlockElement = document.createElement('div')

    const dateTagElement = document.createElement('h4')
    dateTagElement.innerText = d.getDate()
    dateBlockElement.appendChild(dateTagElement)

    if(eventMap.has(getFullDateString(d))){
        const dateEventElement = document.createElement('h4')
        const numberOfEvents = eventMap.get(getFullDateString(d)).length
        dateEventElement.innerText = `(${numberOfEvents} event${numberOfEvents>1 ? 's' : ''})`
        dateBlockElement.appendChild(dateEventElement)
    }

    return dateBlockElement
}

export const calculateRowsForTable = (d) => {
    let dayCount = daysInMonth(d) + dayOneValue(d)
    let rowCount = Math.floor(dayCount / 7)
    if(dayCount%7 !== 0){
        rowCount++
    }
    return rowCount
}


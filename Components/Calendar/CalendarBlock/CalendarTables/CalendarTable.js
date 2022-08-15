import {dayOneDate, dayOneValue, daysInMonth, getFullDateString, getNextMonth} from "../../../../helpers/dateTime.js";
import {
    AddDateBlockFunctionality,
} from "../../../../ComponentFunctions/Calendar.js";
import {eventMap} from "../../../../store/calendar.js";
import {CreateEmptyTable} from "../../../Common/Table.js";

export const AddCalendarTable  = (ParentElement, d, isSubTable) => {
    const CalendarTableElement = CreateEmptyTable(calculateRowsForTable(d)+1, 7)
    if(isSubTable) {
        CalendarTableElement.classList.add('calendar-sub-table')
    }

    fillCalendarHeaders(CalendarTableElement, isSubTable)
    fillCalendarDates(CalendarTableElement, d, isSubTable)

    ParentElement.appendChild(CalendarTableElement)
}

const fillCalendarHeaders = (TableElement, isSubTable) => {
    const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const FirstRowElement = TableElement.children[0]
    for(let i=0;i<7;i++){
        const BlockElement = FirstRowElement.children[i]
        BlockElement.classList.add('pd-5')
        if(isSubTable) {
            BlockElement.innerText = dayMap[i][0]
            continue
        }
        BlockElement.innerText = dayMap[i]
    }
}

const fillCalendarDates = (TableElement, d, isSubTable) => {
    let currentRowNum = 1
    let currentColNum = dayOneValue(d)

    let currentDate = dayOneDate(d)
    const lastDate = getNextMonth(dayOneDate(d))

    for(;currentDate<lastDate; currentColNum++){
        if(currentColNum===7) {
            currentRowNum++
            currentColNum = 0
        }

        const CurrentRowElement = TableElement.children[currentRowNum]

        const CurrentColElement = CurrentRowElement.children[currentColNum]
        CurrentColElement.dataset.fullDateString = currentDate.toString()
        CurrentColElement.className = 'calendar-date-blocks'
        CurrentColElement.classList.add('pd-5')

        AddDateBlock(CurrentColElement, currentDate, isSubTable)
        AddDateBlockFunctionality(CurrentColElement)

        currentDate.setDate(currentDate.getDate()+1)
    }
}

const AddDateBlock = (ParentElement, d, isSubTable) => {
    const DateBlockElement = document.createElement('div')

    const DateTagElement = document.createElement('h4')
    DateTagElement.innerText = d.getDate()
    DateBlockElement.appendChild(DateTagElement)

    if(eventMap.has(getFullDateString(d))){
        const DateEventElement = document.createElement('h4')
        const numberOfEvents = eventMap.get(getFullDateString(d)).length
        if(isSubTable){
            DateEventElement.innerText = `(${numberOfEvents})`
        } else {
            DateEventElement.innerText = `(${numberOfEvents} event${numberOfEvents>1 ? 's' : ''})`
        }
        DateBlockElement.appendChild(DateEventElement)
    }
    ParentElement.appendChild(DateBlockElement)
}

const calculateRowsForTable = (d) => {
    const dayCount = daysInMonth(d) + dayOneValue(d)
    return Math.ceil(dayCount/7)
}


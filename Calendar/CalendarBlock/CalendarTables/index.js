import {SingleTable} from "./SingleTable.js";
import {getNextMonth, getPreviousMonth} from "../../../helpers/dateTime.js";

export const CalendarTables  = (d) => {
    const CalendarTablesElement = document.createElement('div')
    CalendarTablesElement.className = 'calendar-table'
    CalendarTablesElement.classList.add('mr-20')

    CalendarTablesElement.appendChild(SingleTable(getPreviousMonth(d), ['calendar-sub-table']))
    CalendarTablesElement.appendChild(SingleTable(d, []))
    CalendarTablesElement.appendChild(SingleTable(getNextMonth(d), ['calendar-sub-table']))

    return CalendarTablesElement
}
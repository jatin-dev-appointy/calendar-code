import {AddCalendarTable} from "./CalendarTable.js";
import {getNextMonth, getPreviousMonth} from "../../../../helpers/dateTime.js";

export const AddCalendarTables  = (ParentElement, d) => {
    const CalendarTablesElement = document.createElement('div')
    CalendarTablesElement.className = 'calendar-table'
    CalendarTablesElement.classList.add('mr-20')

    AddCalendarTable(CalendarTablesElement, getPreviousMonth(d), true)
    AddCalendarTable(CalendarTablesElement, d, false)
    AddCalendarTable(CalendarTablesElement, getNextMonth(d), true)

    ParentElement.appendChild(CalendarTablesElement)
}
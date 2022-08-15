import {AddCalendarControls} from "./CalendarControls.js";
import {AddCalendarTables} from "./CalendarTables/index.js";

export const AddCalendarBlock  = (ParentElement, d) => {
    const CalendarBlockElement = document.createElement('div')
    CalendarBlockElement.classList.add('pd-10')

    AddCalendarControls(CalendarBlockElement, d)
    AddCalendarTables(CalendarBlockElement, d)

    ParentElement.appendChild(CalendarBlockElement)
}
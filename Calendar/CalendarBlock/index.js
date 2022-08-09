import {CalendarControls} from "./CalendarControls.js";
import {CalendarTables} from "./CalendarTables/index.js";

export const CalendarBlock  = (d) => {
    const CalendarBlockElement = document.createElement('div')
    CalendarBlockElement.classList.add('pd-10')

    CalendarBlockElement.appendChild(CalendarControls(d))
    CalendarBlockElement.appendChild(CalendarTables(d))

    return CalendarBlockElement
}
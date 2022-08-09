import {CalendarHeading} from "./CalendarHeading.js";
import {CalendarBlock} from "./CalendarBlock/index.js";
import {CalendarAddEventSection} from "./CalendarAddEventSection.js";
import {CalendarShowEventSection} from './CaledarShowEventSection.js'
import {eventMap, selectedDate} from "../store/calendar.js";

export const Calendar  = (d) => {
    const CalendarElement = document.createElement('div')

    CalendarElement.appendChild(CalendarHeading())
    CalendarElement.appendChild(CalendarBlock(d))
    CalendarElement.appendChild(CalendarEventsSection())

    return CalendarElement
}

export const CalendarEventsSection = () => {
    const CalendarEventsSectionElement = document.createElement('div')
    CalendarEventsSectionElement.className = 'calendar-events-section'

    CalendarEventsSectionElement.appendChild(CalendarAddEventSection())

    const showEvents = selectedDate.fullDate !== "" && eventMap.has(selectedDate.fullDate)
    if(showEvents){
        CalendarEventsSectionElement.appendChild(CalendarShowEventSection())
    }

    return CalendarEventsSectionElement
}
import {AddCalendarHeading} from "./CalendarHeading.js";
import {eventMap, selectedDate} from "../../store/calendar.js";
import {AddCalendarAddEventSection} from "./CalendarAddEventSection.js";
import {AddCalendarShowEventSection} from "./CaledarShowEventSection.js";
import {AddCalendarBlock} from "./CalendarBlock";

export const AddCalendar  = (ParentElement, d) => {
    const CalendarElement = document.createElement('div')

    AddCalendarHeading(CalendarElement)
    AddCalendarBlock(CalendarElement, d)
    AddCalendarEventsSection(CalendarElement)

    ParentElement.appendChild(CalendarElement)
}

export const AddCalendarEventsSection = (ParentElement) => {
    const CalendarEventsSectionElement = document.createElement('div')
    CalendarEventsSectionElement.className = 'calendar-events-section'

    AddCalendarAddEventSection(CalendarEventsSectionElement)
    const showEvents = selectedDate.fullDate !== "" && eventMap.has(selectedDate.fullDate)
    if(showEvents){
        AddCalendarShowEventSection(CalendarEventsSectionElement)
    }

    ParentElement.appendChild(CalendarEventsSectionElement)
}
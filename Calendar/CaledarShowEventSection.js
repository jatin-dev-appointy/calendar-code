import {eventMap, selectedDate} from "../store/calendar.js";
import {regenerateCalendar} from "../helpers";

export const CalendarShowEventSection = () => {
    const CalendarShowEventSectionElement = document.createElement('div')
    CalendarShowEventSectionElement.className = 'calendar-show-event-section'
    CalendarShowEventSectionElement.classList.add('pd-20')
    CalendarShowEventSectionElement.classList.add('mr-10')

    CalendarShowEventSectionElement.appendChild(ShowEventSectionHeading())
    CalendarShowEventSectionElement.appendChild(ShowEventSectionItems())
    CalendarShowEventSectionElement.appendChild(DeleteEventsButton())

    return CalendarShowEventSectionElement
}

const ShowEventSectionHeading = () => {
    const ShowEventSectionHeadingElement = document.createElement('h2')
    ShowEventSectionHeadingElement.classList.add('mr-5')
    ShowEventSectionHeadingElement.innerText = 'Added Events'
    return ShowEventSectionHeadingElement
}

const ShowEventSectionItems = () => {
    const ShowEventSectionItemsElement = document.createElement('ul')

    const events = eventMap.get(selectedDate.fullDate)
    events.forEach(evt => {
        const listElem = document.createElement('p')
        listElem.innerText = `-> ${evt}`
        ShowEventSectionItemsElement.appendChild(listElem)
    })

    return ShowEventSectionItemsElement
}

const DeleteEventsButton = () => {
    const DeleteEventsButtonElement = document.createElement('button')
    DeleteEventsButtonElement.classList.add('mr-10')
    DeleteEventsButtonElement.innerText = 'Clear All'

    DeleteEventsButtonElement.onclick = () => {
        eventMap.delete(selectedDate.fullDate)
        regenerateCalendar(selectedDate.date)
    }

    return DeleteEventsButtonElement
}
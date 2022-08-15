import {eventMap, selectedDate} from "../../store/calendar.js";
import {AddDeleteEventButtonFunctionality} from "../../ComponentFunctions/Calendar.js";

export const AddCalendarShowEventSection = (ParentElement) => {
    const CalendarShowEventSectionElement = document.createElement('div')
    CalendarShowEventSectionElement.className = 'calendar-show-event-section'
    CalendarShowEventSectionElement.classList.add('pd-20')
    CalendarShowEventSectionElement.classList.add('mr-10')

    AddShowEventSectionHeading(CalendarShowEventSectionElement)
    AddShowEventSectionItems(CalendarShowEventSectionElement)
    AddDeleteEventsButton(CalendarShowEventSectionElement)

    ParentElement.appendChild(CalendarShowEventSectionElement)
}

const AddShowEventSectionHeading = (ParentElement) => {
    const ShowEventSectionHeadingElement = document.createElement('h2')
    ShowEventSectionHeadingElement.classList.add('mr-5')
    ShowEventSectionHeadingElement.innerText = 'Added Events'

    ParentElement.appendChild(ShowEventSectionHeadingElement)
}

const AddShowEventSectionItems = (ParentElement) => {
    const ShowEventSectionItemsElement = document.createElement('ul')

    const events = eventMap.get(selectedDate.fullDate)
    events.forEach(evt => {
        const ListElement = document.createElement('p')
        ListElement.innerText = `-> ${evt}`
        ShowEventSectionItemsElement.appendChild(ListElement)
    })

    ParentElement.appendChild(ShowEventSectionItemsElement)
}

const AddDeleteEventsButton = (ParentElement) => {
    const DeleteEventsButtonElement = document.createElement('button')
    DeleteEventsButtonElement.classList.add('mr-10')
    DeleteEventsButtonElement.innerText = 'Clear All'
    AddDeleteEventButtonFunctionality(DeleteEventsButtonElement)

    ParentElement.appendChild(DeleteEventsButtonElement)
}
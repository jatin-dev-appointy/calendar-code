import {selectedDate} from "../../store/calendar.js";
import {
    AddEventSectionSubmitButtonFunctionality,
} from "../../ComponentFunctions/Calendar.js";

export const AddCalendarAddEventSection = (ParentElement) => {
    const CalendarAddEventSectionElement = document.createElement('div')
    CalendarAddEventSectionElement.className = 'calendar-add-event-section'
    CalendarAddEventSectionElement.classList.add('pd-20')
    CalendarAddEventSectionElement.classList.add('mr-10')

    AddEventSectionHeading(CalendarAddEventSectionElement)
    AddEventSectionDateTag(CalendarAddEventSectionElement)
    AddEventSectionNameInput(CalendarAddEventSectionElement)
    AddEventSectionSubmitButton(CalendarAddEventSectionElement)
    AddEventSectionStatus(CalendarAddEventSectionElement)

    ParentElement.appendChild(CalendarAddEventSectionElement)
}

const AddEventSectionHeading = (ParentElement) => {
    const AddEventSectionHeadingElement = document.createElement('h2')
    AddEventSectionHeadingElement.classList.add('mr-5')
    AddEventSectionHeadingElement.innerText = 'Add Events to selected Date'

    ParentElement.appendChild(AddEventSectionHeadingElement)
}

const AddEventSectionDateTag = (ParentElement) => {
    const AddEventSectionDateTagElement = document.createElement('h4')
    AddEventSectionDateTagElement.classList.add('mr-5')
    AddEventSectionDateTagElement.innerText = selectedDate.fullDate ? selectedDate.fullDate : 'No Date Selected!!'

    ParentElement.appendChild(AddEventSectionDateTagElement)
}

const AddEventSectionNameInput = (ParentElement) => {
    const AddEventSectionNameInputElement = document.createElement('input')
    AddEventSectionNameInputElement.classList.add('mr-5')
    AddEventSectionNameInputElement.classList.add('pd-5')
    AddEventSectionNameInputElement.id = 'add-event-section-name-input'
    AddEventSectionNameInputElement.placeholder = 'Enter event name'

    ParentElement.appendChild(AddEventSectionNameInputElement)
}

const AddEventSectionSubmitButton = (ParentElement) => {
    const AddEventSectionSubmitButtonElement = document.createElement('button')
    AddEventSectionSubmitButtonElement.classList.add('mr-5')
    AddEventSectionSubmitButtonElement.innerText = 'Submit'
    AddEventSectionSubmitButtonFunctionality(AddEventSectionSubmitButtonElement)

    ParentElement.appendChild(AddEventSectionSubmitButtonElement)
}

const AddEventSectionStatus = (ParentElement) => {
    const AddEventSectionStatusElement = document.createElement('h4')
    AddEventSectionStatusElement.id = 'event-section-status'
    AddEventSectionStatusElement.classList.add('mr-5')

    ParentElement.appendChild(AddEventSectionStatusElement)
}


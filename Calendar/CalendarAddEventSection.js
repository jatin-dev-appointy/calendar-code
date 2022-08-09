import {eventMap, selectedDate} from "../store/calendar.js";
import {regenerateCalendar} from "../helpers/index.js";

export const CalendarAddEventSection = () => {
    const CalendarAddEventSectionElement = document.createElement('div')
    CalendarAddEventSectionElement.className = 'calendar-add-event-section'
    CalendarAddEventSectionElement.classList.add('pd-20')
    CalendarAddEventSectionElement.classList.add('mr-10')

    CalendarAddEventSectionElement.appendChild(AddEventSectionHeading())
    CalendarAddEventSectionElement.appendChild(AddEventSectionDateTag())
    CalendarAddEventSectionElement.appendChild(AddEventSectionNameInput())
    CalendarAddEventSectionElement.appendChild(AddEventSectionSubmitButton())
    CalendarAddEventSectionElement.appendChild(AddEventSectionStatus())

    return CalendarAddEventSectionElement
}

const AddEventSectionHeading = () => {
    const AddEventSectionHeadingElement = document.createElement('h2')
    AddEventSectionHeadingElement.classList.add('mr-5')
    AddEventSectionHeadingElement.innerText = 'Add Events to selected Date'
    return AddEventSectionHeadingElement
}

const AddEventSectionDateTag = () => {
    const AddEventSectionDateTagElement = document.createElement('h4')
    AddEventSectionDateTagElement.classList.add('mr-5')
    AddEventSectionDateTagElement.innerText = selectedDate.fullDate ? selectedDate.fullDate : 'No Date Selected!!'

    return AddEventSectionDateTagElement
}

const AddEventSectionNameInput = () => {
    const AddEventSectionNameInputElement = document.createElement('input')
    AddEventSectionNameInputElement.classList.add('mr-5')
    AddEventSectionNameInputElement.classList.add('pd-5')
    AddEventSectionNameInputElement.id = 'add-event-section-name-input'
    AddEventSectionNameInputElement.placeholder = 'Enter event name'

    return AddEventSectionNameInputElement
}

const AddEventSectionSubmitButton = () => {
    const AddEventSectionSubmitButtonElement = document.createElement('button')
    AddEventSectionSubmitButtonElement.classList.add('mr-5')
    AddEventSectionSubmitButtonElement.innerText = 'Submit'

    AddEventSectionSubmitButtonElement.onclick = () => {
        const AddEventSectionNameInputElement = document.getElementById('add-event-section-name-input')
        const AddEventSectionStatusElement = document.getElementById('event-section-status')

        if(selectedDate.fullDate === ""){
            AddEventSectionStatusElement.innerText = "Please select date!!"
            return
        }

        const EventSectionNameInputElementText = AddEventSectionNameInputElement.value
        if(EventSectionNameInputElementText === ""){
            AddEventSectionStatusElement.innerText = "Please enter event name!!"
            return
        }

        if(eventMap.has(selectedDate.fullDate)){
            let events = eventMap.get(selectedDate.fullDate)
            events = [...events, EventSectionNameInputElementText]
            eventMap.set(selectedDate.fullDate, events)
        } else {
            eventMap.set(selectedDate.fullDate, [EventSectionNameInputElementText])
        }

        AddEventSectionStatusElement.innerText = "Event added successfully."
        AddEventSectionNameInputElement.value = ""

        regenerateCalendar(selectedDate.date)
    }

    return AddEventSectionSubmitButtonElement
}

const AddEventSectionStatus = () => {
    const AddEventSectionStatusElement = document.createElement('h4')
    AddEventSectionStatusElement.id = 'event-section-status'
    AddEventSectionStatusElement.classList.add('mr-5')

    return AddEventSectionStatusElement
}


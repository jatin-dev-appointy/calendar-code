import {AddCalendar} from "../Components/Calendar";
import {eventMap, selectedDate} from "../store/calendar.js";
import {dayOneDate, getFullDateString, getNextMonth, getPreviousMonth} from "../helpers/dateTime.js";

export const AddPreviousButtonFunctionality = (PreviousButtonElement, d) => {
    PreviousButtonElement.onclick = () => {
        regenerateCalendar(getPreviousMonth(d))
    }
}

export const AddNextButtonFunctionality = (NextButtonElement, d) => {
    NextButtonElement.onclick = () => {
        regenerateCalendar(getNextMonth(d))
    }
}

export const AddDateBlockFunctionality = (DateBlockElement) => {
    DateBlockElement.addEventListener('click', () => {
        const dt = new Date(DateBlockElement.dataset.fullDateString)
        setSelectedDate(dt)
        regenerateCalendar(dayOneDate(dt))
    })
}


export const AddEventSectionSubmitButtonFunctionality = (AddEventSectionSubmitButtonElement) => {
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
}

export const AddDeleteEventButtonFunctionality = (DeleteEventsButtonElement) => {
    DeleteEventsButtonElement.onclick = () => {
        eventMap.delete(selectedDate.fullDate)
        regenerateCalendar(selectedDate.date)
    }
}


const regenerateCalendar = (d) => {
    const RootElement = document.getElementById('root')
    RootElement.innerHTML = ""
    AddCalendar(RootElement, d)
}

const setSelectedDate = (d) => {
    selectedDate.fullDate = getFullDateString(d)
    selectedDate.date = d
}
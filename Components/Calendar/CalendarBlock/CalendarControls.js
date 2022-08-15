import {getFullMonthString} from "../../../helpers/dateTime.js";
import {
    AddNextButtonFunctionality,
    AddPreviousButtonFunctionality,
} from "../../../ComponentFunctions/Calendar.js";

export const AddCalendarControls  = (ParentElement, d) => {
    const CalendarControlsElement = document.createElement('div')
    CalendarControlsElement.className = 'calendar-controls'

    AddPreviousButton(CalendarControlsElement, d)
    AddMonthName(CalendarControlsElement, d)
    AddNextButton(CalendarControlsElement, d)

    ParentElement.appendChild(CalendarControlsElement)
}

const AddPreviousButton = (ParentElement, d) => {
    const PreviousButtonElement = document.createElement('button')
    PreviousButtonElement.classList.add('pd-5')
    PreviousButtonElement.innerText = '<'
    AddPreviousButtonFunctionality(PreviousButtonElement, d)

    ParentElement.appendChild(PreviousButtonElement)
}

const AddNextButton = (ParentElement, d) => {
    const NextButtonElement = document.createElement('button')
    NextButtonElement.classList.add('pd-5')
    NextButtonElement.innerText = '>'
    AddNextButtonFunctionality(NextButtonElement, d)

    ParentElement.appendChild(NextButtonElement)
}

const AddMonthName = (ParentElement, d) => {
    const MonthNameElement = document.createElement('h2')
    MonthNameElement.innerText = getFullMonthString(d)

    ParentElement.appendChild(MonthNameElement)
}

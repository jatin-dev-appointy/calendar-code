import {getFullMonthString, getNextMonth, getPreviousMonth} from "../../helpers/dateTime.js";
import {regenerateCalendar} from "../../helpers";

export const CalendarControls  = (d) => {
    const CalendarControlsElement = document.createElement('div')
    CalendarControlsElement.className = 'calendar-controls'

    CalendarControlsElement.appendChild(PreviousButton(d))
    CalendarControlsElement.appendChild(MonthName(d))
    CalendarControlsElement.appendChild(NextButton(d))

    return CalendarControlsElement
}

const PreviousButton = (d) => {
    const PreviousButtonElement = document.createElement('button')
    PreviousButtonElement.classList.add('pd-5')
    PreviousButtonElement.innerText = '<'
    PreviousButtonElement.onclick = () => {
        regenerateCalendar(getPreviousMonth(d))
    }
    return PreviousButtonElement
}

const NextButton = (d) => {
    const NextButtonElement = document.createElement('button')
    NextButtonElement.classList.add('pd-5')
    NextButtonElement.innerText = '>'
    NextButtonElement.onclick = () => {
        regenerateCalendar(getNextMonth(d))
    }
    return NextButtonElement
}

const MonthName = (d) => {
    const MonthNameElement = document.createElement('h2')
    MonthNameElement.innerText = getFullMonthString(d)
    return MonthNameElement
}

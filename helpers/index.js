import {Calendar} from "../Calendar";
import {selectedDate} from "../store/calendar.js";
import {getFullDateString} from "./dateTime.js";

export const regenerateCalendar = (d) => {
    const RootElement = document.getElementById('root')
    RootElement.innerHTML = ""
    RootElement.appendChild(Calendar(d))
}

export const setSelectedDate = (d) => {
    selectedDate.fullDate = getFullDateString(d)
    selectedDate.date = d
}
export const AddCalendarHeading = (ParentElement) => {
    const CalendarHeadingElement = document.createElement('h1')
    CalendarHeadingElement.classList.add('mr-20')
    CalendarHeadingElement.innerText = 'Calendar Component'

    ParentElement.appendChild(CalendarHeadingElement)
}
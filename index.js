const selectedTag = document.getElementById('selected-tag')
const calendarTable = document.getElementById('calendar-table')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

const monthMap = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

const dayRow = document.createElement('tr')
dayRow.innerHTML = `<tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>`

const fillCalendar = (d) => {
    calendarTable.innerHTML = ""
    calendarTable.appendChild(dayRow)

    const startDate = new Date(d.getFullYear(), d.getMonth(), 1)
    const endDate = new Date(d.getFullYear(), d.getMonth()+1, 0)

    calendarTable.appendChild(document.createElement('tr'))
    //filling initial empty blocks
    for(let i=0;i<startDate.getDay();i++){
        let currentRow = calendarTable.children[1]
        const emptyBlock = document.createElement('td')
        emptyBlock.className = 'empty-block'
        currentRow.appendChild(emptyBlock)
    }

    let currentDay = startDate.getDay()
    let rowNum = 1
    //filling dates
    for(let i=1;i<=endDate.getDate();i++){
        if(currentDay>6){
            calendarTable.appendChild(document.createElement('tr'))
            rowNum++
            currentDay = 0
        }

        const newBlock = document.createElement('td')
        newBlock.innerText = i.toString()

        let currentRow = calendarTable.children[rowNum]
        currentRow.appendChild(newBlock)
        currentDay++
    }

    //filling ending empty blocks
    for(let i=currentDay;i<7;i++){
        let currentRow = calendarTable.children[rowNum]
        const emptyBlock = document.createElement('td')
        emptyBlock.className = 'empty-block'
        currentRow.appendChild(emptyBlock)
    }
}

const setCalendar = (d) => {
    selectedTag.innerText = `${monthMap[d.getMonth().toString()]}, ${d.getFullYear()}`
    fillCalendar(d)
}

let d = new Date()
setCalendar(d)

prevBtn.onclick = () => {
    d = new Date(d.setMonth(d.getMonth()-1))
    setCalendar(d)
}

nextBtn.onclick = () => {
    d = new Date(d.setMonth(d.getMonth()+1))
    setCalendar(d)
}
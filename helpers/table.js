export const generateTable = (rowCount, colCount) => {
    const tableElem = document.createElement('table')
    for(let i=0;i<rowCount;i++) {
        let rowElem = document.createElement('tr')
        for(let j=0;j<colCount;j++){
            let colElem;
            if(i===0){
                colElem = document.createElement('th')
            } else {
                colElem = document.createElement('td')
                colElem.className = 'empty-block'
            }
            rowElem.appendChild(colElem)
        }
        tableElem.appendChild(rowElem)
    }
    return tableElem
}
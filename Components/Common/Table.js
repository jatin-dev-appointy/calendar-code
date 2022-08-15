export const CreateEmptyTable = (rowCount, colCount) => {
    const TableElement = document.createElement('table')
    for(let i=0;i<rowCount;i++) {
        AddRowElement(TableElement, colCount, i===0)
    }
    return TableElement
}

const AddRowElement = (ParentElement, colCount, isHeader) => {
    const RowElement = document.createElement('tr')
    for(let i=0;i<colCount;i++){
        AddColElement(RowElement, isHeader)
    }

    ParentElement.appendChild(RowElement)
}

const AddColElement = (ParentElement, isHeader) => {
    let ColElement
    if(isHeader) {
        ColElement = document.createElement('th')
    } else {
        ColElement = document.createElement('td')
        ColElement.classList.add('empty-block')
    }

    ParentElement.appendChild(ColElement)
}
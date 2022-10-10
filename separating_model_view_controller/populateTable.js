addDataRows = () => {
    let ds = new DataService();
    ds.getData().forEach((element) => { createRow(document.getElementById("rows"), element) })
    // console.log(ds.getData())
}

// Pass into the function the DOM element with the id 'rows', and a single object of data
createRow = (parentElem, rowData) => {
    // create 'row'
    let row = parentElem.insertRow(1)

    // populate the rows with a single object of data of the specified parameter
    let cellName = row.insertCell(0)
    cellName.innerHTML = rowData.name

    let cellGender = row.insertCell(1)
    cellGender.innerHTML = rowData.gender

    let cellAddress = row.insertCell(2)
    cellAddress.innerHTML = rowData.address

    let cellAge = row.insertCell(3)
    cellAge.innerHTML = rowData.age

    let cellPhoneNumber = row.insertCell(4)
    cellPhoneNumber.innerHTML = rowData.phoneNumber
}
addDataRows = async () => {
    let ds = new DataService();
    // if (debug) {console.log(ds.fetchData())}
    try {
        let response = await ds.fetchData()
        if (debug) {
            console.log('Response: ', JSON.stringify(response))
            console.log('Data fetched!')
            console.log('Getting data...', ds.getData())
        }
        ds.getData()
            .results
            .forEach((element) => {
                createRow(document.getElementById("rows"), element)
            })
        if (debug) { console.log('Populated table!') }
    } catch (err) {
        console.log('Error, unable to fetch data: ', err)
    }
}

// Pass into the function the DOM element with the id 'rows', and a single object of data
createRow = (parentElem, rowData) => {
    if (debug) {console.log('Creating row...')}
    // create 'row'
    let row = parentElem.insertRow(1)

    if (debug) {console.log('createRow()...', rowData)}
    // populate the rows with a single object of data of the specified parameter
    let cellName = row.insertCell(0)
    cellName.innerHTML = `${rowData.name.first} ${rowData.name.last}`

    let cellGender = row.insertCell(1)
    cellGender.innerHTML = rowData.gender

    let cellAddress = row.insertCell(2)
    cellAddress.innerHTML = `${rowData.location.street.number} ${rowData.location.street.name}`

    let cellAge = row.insertCell(3)
    cellAge.innerHTML = rowData.dob.age

    let cellPhoneNumber = row.insertCell(4)
    cellPhoneNumber.innerHTML = rowData.phoneNumber

    let cellImg = row.insertCell(5)
    const image = document.createElement('img')
    image.src = rowData.picture.large
    cellImg.append(image)
}
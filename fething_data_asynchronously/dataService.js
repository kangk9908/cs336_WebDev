try {
    const fetch = require('node-fetch');
} catch { }

const debug = false;

class DataService {
    // data array with at least 3 defined ojects with the following properties:
    // name, gender, address, age, phoneNumber
    // data = [
    //     {
    //         name: "Kun",
    //         gender: "M",
    //         address: "Phi 24",
    //         age: 23,
    //         phoneNumber: "(616) 555-3776"
    //     },
    //     {
    //         name: "Sunghyun",
    //         gender: "M",
    //         address: "Phi 24",
    //         age: 24,
    //         phoneNumber: "(616) 555-3777" },
    //     {
    //         name: "Yongjun",
    //         gender: "M", 
    //         address: "Phi 24",
    //         age: 25, 
    //         phoneNumber: "(616) 555-3778"
    //     }
    // ];
    constructor() { this.data = [] }

    // returns data, optional paramater allows user to limit amount of data supplied
    // if parameter is not supplied all data is returned
    getData = (numRecords) => {
        return (numRecords === undefined ? this.data : this.data.slice(0, numRecords))
    }


    fetchData = async () => {
        return new Promise(async (resolve, reject) => {
            //wait and then fetch data
            if (debug) { console.log("Trying to fetch data...") }
            try {
                let response = await fetch('https://randomuser.me/api/?results=10')
                //checking if response is ok
                if (debug) { console.log('Checking response...') }
                // if response is not ok
                if (!response.ok) {
                    // print error message
                    if (debug) { console.log('Response is not ok...') }
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    // reject promise
                    reject(response)
                } else {
                    // print response status as ok
                    if (debug) { console.log('Response is ok') }
                    let json = await response.json()
                    if (debug) { console.log('Data : ', json) }
                    // set this.data to fetched data
                    this.data = json
                    // resolves promise
                    resolve(response)
                };
            }
            catch (err) {
                console.log('Fetch Error :-S', err);
            }
        })
    }
}

// test class with console.log()
// const dataService = new DataService();
// console.log(dataService.getData());
// console.log(dataService.getData(-1));
// console.log(dataService.getData(0));
// console.log(dataService.getData(1));
// console.log(dataService.getData(2));
// console.log(dataService.getData(3));
// console.log(dataService.getData(4));
// console.log(dataService.getData());

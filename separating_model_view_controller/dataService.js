class DataService {
    // data array with at least 3 defined ojects with the following properties:
    // name, gender, address, age, phoneNumber
    data = [
        { name: "Kun", gender: "M", address: "Phi 24", age: 23, phoneNumber: "(616) 555-3776" },
        { name: "Sunghyun", gender: "M", address: "Phi 24", age: 24, phoneNumber: "(616) 555-3777" },
        { name: "Yongjun", gender: "M", address: "Phi 24", age: 25, phoneNumber: "(616) 555-3778" }
    ];
    constructor() { }

    getData = (numRecords) => {
        // if parameter is not provided, return whole data array
        // else return only the first numRecords of the data array
        return (numRecords === undefined ? this.data : this.data.slice(0, numRecords))
    }
}
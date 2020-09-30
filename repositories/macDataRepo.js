const csvToJson = require('convert-csv-to-json');



const getMacData = () => {
    const csvPath = __dirname + '/mac-data.csv'
    let json = csvToJson.getJsonFromCsv(csvPath);

    console.log(json[0]);
}

module.exports = getMacData;
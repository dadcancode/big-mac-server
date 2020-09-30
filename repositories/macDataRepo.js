const csvToJson = require('convert-csv-to-json');



const getMacData = () => {
    const csvPath = __dirname + '/mac-data.csv'
    let json = csvToJson.fieldDelimiter(';').formatValueByType().getJsonFromCsv(csvPath);

    return json
}

module.exports = getMacData;
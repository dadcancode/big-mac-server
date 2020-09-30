const csv = require('csvtojson');


const getMacData = () => {
    const csvFilePath = '../staticData/mac-data.txt';
    let result = csv().fromFile(csvFilePath).then(json => {return json});
    return result;
}

module.exports = getMacData;
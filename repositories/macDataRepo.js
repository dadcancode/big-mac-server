const csv = require('csvtojson');


const getMacData = async () => {
    const csvFilePath = '../staticData/mac-data.csv';
    let result = await csv().fromFile(csvFilePath);
    return result;
}

module.exports = getMacData;
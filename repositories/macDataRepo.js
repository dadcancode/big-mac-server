const csv = require('csvtojson');


const getMacData = async () => {
    const csvFilePath = '../staticData/mac-data.txt';
    let result = await csv().fromFile(csvFilePath);
    return result;
}

module.exports = getMacData;
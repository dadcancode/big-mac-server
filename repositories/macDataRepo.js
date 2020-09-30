const fs = require('fs');

const getMacData = async () => {
    let result = null;
    fs.readFile('../staticData/mac-data.txt', (err, data) => {
        result = data;
    })
    return result
}

module.exports = getMacData;
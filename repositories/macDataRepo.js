const fs = require('fs');

const getMacData = async () => {
    fs.readFile('../staticData/mac-data.txt', (err, data) => {
        console.log(data);
    })
}

module.exports = getMacData;
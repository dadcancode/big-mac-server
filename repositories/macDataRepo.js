var fs = require('fs');

const csvFile = require('../repositories/mac-data.csv');



const getMacData = () => {
    fs.readFile(csvFile, function (err, data) {
        if (err) throw err;
        console.log(data);
    })
}

module.exports = getMacData;
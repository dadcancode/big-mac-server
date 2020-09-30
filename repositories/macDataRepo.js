var fs = require('fs');



const getMacData = () => {
    const csvPath = '../repositories/mac-data.csv'
    fs.readFile(csvPath, function (err, data) {
        if (err) throw err;
        console.log(data);
    })
}

module.exports = getMacData;
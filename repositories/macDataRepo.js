var fs = require('fs');



const getMacData = () => {
    const csvPath = __dirname + '/mac-data.txt'
    fs.readFile(csvPath, function (err, data) {
        if (err) throw err;
        console.log('data follows')
        console.log(data);
    })
}

module.exports = getMacData;
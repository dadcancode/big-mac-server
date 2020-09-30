var fs = require('fs');




const getMacData = () => {
    fs.readFile('./mac-data.csv', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    })
}

module.exports = getMacData;
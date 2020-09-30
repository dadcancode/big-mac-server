const fs = require('fs');


const getMacData = () => {
    let result = fs.readFile('file:///C:/Users/Crystal/Desktop/Portfolio/big-mac-server/staticData/mac-data.txt', (err, data) => {

        if(err) {
            throw err;
        }
        return data
    })
    return result
}

module.exports = getMacData;
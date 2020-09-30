const fs = require('fs');


const getMacData = async () => {
    let result = await fs.readFile('C:/Users/Crystal/Desktop/Portfolio/big-mac-server/staticData/mac-data.txt', (err, data) => {
        if (err) throw err;
        return data
    })
    return result
}

module.exports = getMacData;
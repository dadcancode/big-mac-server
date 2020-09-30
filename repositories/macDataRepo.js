const fs = require('fs');


const getMacData = async () => {
    let result = await fs.readFile('C:/Users/Crystal/Desktop/Portfolio/big-mac-server/staticData/mac-data.txt', (err, data) => {
        return data
    })
    return result
}

module.exports = getMacData;
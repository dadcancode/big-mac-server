const fs = require('fs');

const getMacData = async () => {
    let result = await fs.readFile('../staticData/mac-data.txt', (err, data) => {
        return data
    })
    return result
}

module.exports = getMacData;
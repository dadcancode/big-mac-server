const https = require('https');

const getMacData = async () => {
    return new Promise((resolve, reject) => {
        https.get('../staticData/mac-data.txt', (res) => {
            let json = '';
            res.on('data', (chunk) => {
                json += chunk;
            })

            res.on('end', () => {
                resolve(json);
            })
        })
    })
}

module.exports = getMacData;
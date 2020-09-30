const { ipMiddleware, getIpLocation, parseMacData } = require('../services/AppServices');
const https = require('https');

const mainController = async (req, res) => {
    let userIp = await ipMiddleware(req, res);

    let ipLocation = await getIpLocation(userIp);

    let macData = await parseMacData();

    console.log(macData);


    res.json({
        ip: userIp,
        location: ipLocation,
        data: macData
    })
    
}

module.exports = {
    mainController
}
const { ipMiddleware, getIpLocation, parseMacData } = require('../services/clientIPservices');
const https = require('https');

const mainController = async (req, res) => {
    let userIp = await ipMiddleware(req, res);

    let ipLocation = await getIpLocation(userIp);

    let macObj = await getMacData();

    parseMacData();


    res.json({
        ip: userIp,
        location: ipLocation
    })
    
}

module.exports = {
    mainController
}
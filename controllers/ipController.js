const { ipMiddleware, getIpLocation } = require('../services/clientIPservices');

const getClientIpLocation = async (req, res) => {
    let userIp = ipMiddleware(req, res);
    let location = await getIpLocation(userIp);
    res.json(location);
    console.log(location)
    res.json(userIp);
}

module.exports = {
    getClientIpLocation
}
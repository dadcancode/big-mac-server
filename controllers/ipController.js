const { ipMiddleware, getIpLocation } = require('../services/clientIPservices');

const getClientIpLocation = async (req, res) => {
    let userIp = ipMiddleware(req, res);

    res.send(`You are currently in ${userIp}`);
}

module.exports = {
    getClientIpLocation
}
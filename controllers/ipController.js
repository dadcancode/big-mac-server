const { ipMiddleware, getIpLocation } = require('../services/clientIPservices');

const getClientIpLocation = async (req, res) => {
    let userIp = ipMiddleware(req, res);
    // let ipLocation = await getIpLocation(userIp);
    // console.log(ipLocation);

    // res.send(`You are currently in ${userIp}`);
    res.json(userIp);
}

module.exports = {
    getClientIpLocation
}
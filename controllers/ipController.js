const { ipMiddleware } = require('../services/clientIPservices');

const getClientIp = async (req, res) => {
    let userIp = ipMiddleware(req, res);

    res.send(userIp);
}

module.exports = {
    getClientIp
}
const requestIp = require('request-ip');

const ipMiddleware = (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    return clientIp;
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = async (ip) => {
    return fetch(`${API_URL}/${ip}`)
        .then(resp => resp.json())
        .then(json => {
            return json
        })
}

module.exports = {
    ipMiddleware,
    getIpLocation
}
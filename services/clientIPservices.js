const requestIp = require('request-ip');
const https = require('https');

const ipMiddleware = (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    return clientIp;
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = (ip, res) => {
    const options = {
        host: 'ipvigilante.com',
        path: `${ip}/full`,
        port: 443,
        method: 'GET',
        headers: {'User-Agent' : 'request'}
    };

    https.get(options, (res) => {})
}

module.exports = {
    ipMiddleware,
    getIpLocation
}
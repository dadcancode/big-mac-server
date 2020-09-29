'use strict';
const requestIp = require('request-ip');
const https = require('https');

const ipMiddleware = async (req, res) => {
    return requestIp.getClientIp(req);
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = (options) => {

    https.get(options, function (res) {
        let json = '';
        res.on('data', function (chunk) {
            json += chunk;
        });

        res.on('end', function () {
            if (res.statusCode === 200) {
                try {
                    let result = JSON.parse(json);
                    return result
                    console.log(result);

                } catch (e) {
                    console.log('Error');
                }
            } else {
                console.log(`Status: ${res.statusCode}`)
            }
        });
    }).on('error', function (err) {
        console.log(err);
    })
}

module.exports = {
    ipMiddleware,
    getIpLocation
}
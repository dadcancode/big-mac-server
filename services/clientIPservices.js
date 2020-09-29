'use strict';
const requestIp = require('request-ip');
const https = require('https');

const ipMiddleware = async (req, res) => {
    return requestIp.getClientIp(req);
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = (userIp) => {

    return new Promise((resolve, reject) => {
        const options = {
            host: 'ipvigilante.com',
            path: `/${userIp}/full`,
            port: 443,
            method: 'GET',
            headers: {'User-Agent' : 'request'}
        };
    
        https.get(options, function (res) {
            let json = '';
            let result = null;
            res.on('data', function (chunk) {
                json += chunk;
            });
    
            res.on('end', function () {
                if (res.statusCode === 200) {
                    try {
                        result = JSON.parse(json);
                        console.log(result);
    
                    } catch (e) {
                        console.log('Error');
                    }
                } else {
                    console.log(`Status: ${res.statusCode}`)
                }
                resolve(result.data.country_name);
            });
        }).on('error', function (err) {
            console.log(err);
        })
    } )

}

module.exports = {
    ipMiddleware,
    getIpLocation
}
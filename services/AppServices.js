'use strict';
const requestIp = require('request-ip');
const https = require('https');
const getMacData = require('../repositories/macDataRepo');

const ipMiddleware = async(req, res) => {
    return requestIp.getClientIp(req);
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = (userIP) => {
    return new Promise((resolve, reject) => {
        const options = {
            host: 'ipvigilante.com',
            path: `/${userIP}/full`,
            port: 443,
            method: 'GET',
            headers: { 'User-Agent' : 'request'}
        }

        https.get(options, function (res) {
            let json = '';
            let result = null;
            res.on('data', function (chunk) {
                json += chunk
            });

            res.on('end', function () {
                if (res.statusCode === 200) {
                    try {
                        result = JSON.parse(json);

                    } catch (e) {
                        console.log('Error')
                    }
                } else {
                    console.log(`Status: ${res.statusCode}`)
                }
                resolve(result.data.country_name)
            });
        }).on('error', function (err) {
            console.log(err);
        })
    })
}

const parseMacData = async () => {
    let jsonArr = getMacData();
    let macObj = {};

    let temp = await Promise.all(
        jsonArr.map((val) => {
            if(new Date(val['Date']) >= new Date('2016-01-01')) {
                macObj[val['Country']] = val
            }
        })
    ) 
    return macObj
}

module.exports = {
    ipMiddleware,
    getIpLocation,
    parseMacData
}
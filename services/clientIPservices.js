'use strict';
const requestIp = require('request-ip');
const https = require('https');
const getMacData = require('../repositories/macDataRepo');

const ipMiddleware = async(req, res) => {
    return requestIp.getClientIp(req);
}

const API_URL = 'https://ipvigilante.com/json';

const getIpLocation = async (ip) => {
    const options = {
        host: 'ipvigilante.com',
        path: `${ip}/full`,
        port: 443,
        method: 'GET',
        headers: {'User-Agent' : 'request'}
    };
    
    
    https.get(options, (res) => {
        let json = '';
        res.on('data', (chunk) => {
            json += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                try {
                    console.log('i tried!')
                    let result = JSON.parse(json);
                    console.log(result)
                    return result;
                } catch (e) {
                    console.log('Error')
                }
            } else {
                console.log(`Status ${res.statusCode}`)
            }
        });
    }).on('error', (err) => {
        console.log(err)
    });
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
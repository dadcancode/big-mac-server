const { ipMiddleware, getIpLocation } = require('../services/clientIPservices');
const https = require('https');

const getClientIpLocation = async (req, res) => {
    let userIp = await ipMiddleware(req, res);
    let ipLocation = null;

    const options = {
        host: 'ipvigilante.com',
        path: `/${userIp}/full`,
        port: 443,
        method: 'GET',
        headers: {'User-Agent' : 'request'}
    };

    https.get(options, function (res) {
        let json = '';
        res.on('data', function (chunk) {
            json += chunk;
        });

        res.on('end', function () {
            if (res.statusCode === 200) {
                try {
                    let result = JSON.parse(json);
                    ipLocation = result.data.country_name
                    console.log(ipLocation);
                    

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


    res.json({
        ip: userIp,
        location: ipLocation
    })
    
}

module.exports = {
    getClientIpLocation
}
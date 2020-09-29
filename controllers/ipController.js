const { ipMiddleware, getIpLocation } = require('../services/clientIPservices');
const https = require('https');

const getClientIpLocation = async (req, res) => {
    let userIp = await ipMiddleware(req, res);

    // const options = {
    //     host: 'ipvigilante.com',
    //     path: `/${userIp}/full`,
    //     port: 443,
    //     method: 'GET',
    //     headers: {'User-Agent' : 'request'}
    // };

    // https.get(options, function(res) {
    //     let json = '';
    //     let result = null;
    //     res.on('data', function (chunk) {
    //         json += chunk;
    //     });

    //     res.on('end', function () {
    //         if (res.statusCode === 200) {
    //             try {
    //                 result = JSON.parse(json);
    //                 console.log(result)                    

    //             } catch (e) {
    //                 console.log('Error');
    //             }
    //         } else {
    //             console.log(`Status: ${res.statusCode}`)
    //         }
    //     });

    //     // res.json({location: result.data.country_name})
    // }).on('error', function (err) {
    //     console.log(err);
    // })

    let ipLocation = await getIpLocation(userIp);


    res.json({
        ip: userIp,
        location: ipLocation
    })
    
}

module.exports = {
    getClientIpLocation
}
const { parseMacData } = require('../services/AppServices');


const getMacDataObj = async (req, res) => {
    let macData = await parseMacData();

    res.json(macData);
}

const getCountryMacData = async (req, res) => {
    let macData = await parseMacData();

    res.json(macData[req.params.country]);
}

module.exports = { getMacDataObj, getCountryMacData };
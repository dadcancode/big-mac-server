const express = require('express');

const { mainController } = require('../controllers/ipController');
const { getCountryMacData } = require('../controllers/macDataController');
const getMacData = require('../repositories/macDataRepo');

const router = express.Router();

router.get('/', mainController);

router.get('/macData', getMacData);

router.get('/macData/:country', getCountryMacData);

module.exports = router;
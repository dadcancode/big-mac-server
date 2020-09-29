const express = require('express');

const { getClientIpLocation } = require('../controllers/ipController');

const router = express.Router();

router.get('/', getClientIpLocation);

module.exports = router;
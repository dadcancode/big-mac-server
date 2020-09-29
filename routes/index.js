const express = require('express');

const { getClientIp } = require('../controllers/ipController');

const router = express.Router();

router.get('/', getClientIp);

module.exports = router;
const express = require('express');

const { mainController } = require('../controllers/ipController');

const router = express.Router();

router.get('/', mainController);

module.exports = router;
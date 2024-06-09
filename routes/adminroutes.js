const express = require('express');
const { addAppointment } = require('../controller/adminCtrl');

const router = express.Router();

router.post('/add-data',addAppointment);

module.exports = router;``
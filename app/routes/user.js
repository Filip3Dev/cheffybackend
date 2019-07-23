'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controlers/user-controler');
const authService = require('../services/auth');


router.get('/', authService.authorize, controller.get);


module.exports = router;

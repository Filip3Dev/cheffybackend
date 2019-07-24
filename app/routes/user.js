'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controlers/user-controler');


router.get('/', controller.list);
router.post('/', controller.create);


module.exports = router;

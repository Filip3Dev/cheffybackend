'use strict';

import HttpStatus from 'http-status-codes';

const { User } = require('../models');

exports.create = async (req, res, next) => {
  let payload = {};
  const existUser = await User.find({
    attributes: ['email'],
    where: {
      email: req.body.email,
    },
  });
  if (existUser) {
    payload.status = HttpStatus.CONFLICT;
    res.status(400).send(payload);
  } else {
    const user = await User.create({
      ...userData,
    });
    payload.status = HttpStatus.CREATED;
    payload.result = user;
    res.status(200).send(payload);
  }
};

exports.list = async (req, res, next) => {
  const existUser = await User.findAll();
  res.status(200).send(existUser);
}

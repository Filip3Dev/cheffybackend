'use strict';
var HttpStatus = require('http-status-codes');
const ValidationContract = require('../services/validator');
const { User } = require('../models/index');
const md5 = require('md5');


exports.create = async (req, res, next) => {
  let payload = {};

  let contract = new ValidationContract();
  contract.hasMinLen(req.body.name, 10, 'Your name should have more than 10 caracteres');
  contract.isEmail(req.body.email, 'This email is correct?');
  contract.hasMinLen(req.body.password, 6, 'Password must be longer than 6 characters!');

  if (!contract.isValid()) {
    res.status(HttpStatus.CONFLICT).send(contract.errors()).end();
    return 0;
  }

  // const existUser = await User.find({ attributes: ['email'], where: { email: req.body.email }});
  const existUser = await User.findOne({ where: { email: req.body.email } });

  if (existUser) {
    payload.status = HttpStatus.CONFLICT;
    res.status(payload.status).send({ message: 'error when registering', status: HttpStatus.CONFLICT});
    return 0;
  }
  const user = await User.create({ ...req.body });
  payload.status = HttpStatus.CREATED;
  payload.result = user;
  res.status(payload.status).send(payload);
};

exports.list = async (req, res, next) => {
  const existUser = await User.findAll();
  res.status(HttpStatus.ACCEPTED).send(existUser);
}

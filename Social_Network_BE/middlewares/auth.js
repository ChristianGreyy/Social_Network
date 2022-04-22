const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = catchAsync(async (req, res, next) => { 
  const token = req.headers.authorization;
  
  if (!token) {
    return next(new AppError("Please authorization"));
  }

  const { userId } = await jwt.verify(token, process.env.LOGIN_TOKEN);

  const user = await User.findById(userId);

  if(!user) {
    return next(new AppError("Please authorization"))
  }

  req.user = user;

  return next();
});

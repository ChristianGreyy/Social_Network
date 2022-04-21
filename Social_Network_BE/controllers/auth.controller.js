const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { transporter, message } = require("../services/email");

const createLoginToken = catchAsync(async (data, res) => {
  const token = await promisify(jwt.sign)({ data }, process.env.LOGIN_TOKEN, {
    expiresIn: process.env.LOGIN_TOKEN_EXPIRES,
  });
  return res.status(httpStatus.OK).json({
    status: "success",
    token,
  });
});

exports.signup = catchAsync(async (req, res, next) => {
  const user = new User(req.body);
  const result = await user.save();
  await transporter.sendMail({html: message(result.email)}, function(err, info) {
    if(err) {
      console.log(err);
      return new AppError(err);
    }
    console.log(info.response);
})
  res.status(httpStatus.CREATED).json({
    status: "success",
    data: {
      result,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email: email });

  if (!user) {
    return next(new AppError("Wrong email or password"));
  }

  if (!(await user.isCorrectPassword(password))) {
    return next(new AppError("Wrong email or password"));
  }

  createLoginToken(user._id, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {});

const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");

module.exports = AppError((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(AppError("Please authorization"));
  }
});

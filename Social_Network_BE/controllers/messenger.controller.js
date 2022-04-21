const User = require("../models/user.model");
const Messenger = require("../models/");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");

exports.getMessages = catchAsync((req, res, next) => {
  const { senderId } = req.params;
  const messengers = Messenger.findOne({ _id: senderId });

  res.json({
    status: httpStatus.OK,
    data: {
      messengers,
    },
  });
});

exports.createMessage = (req, res, next) => {};

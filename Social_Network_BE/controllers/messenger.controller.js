const User = require("../models/user.model");
const Messenger = require("../models/messenger.model");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");
const { response } = require("express");

exports.getMessages = catchAsync(async (req, res, next) => {
  const { receiverId } = req.params;
  const senderId = req.user._id;
  // console.log(receiverId, senderId.toString());
  // const user = await User.findOne({_id: receiverId})
  const messengers = await Messenger.find({  senderId, receiverId});

  res.json({
    status: httpStatus.OK,
    data: {
      messengers,
    },
  });
});

exports.postMessage = catchAsync(async (req, res, next) => {
  const { receiverId } = req.params;
  const { content } = req.body;
  const messenger = new Messenger({
    content,
    receiverId,
    senderId: req.user._id,
  })

  await messenger.save();

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    data: {
      messenger,
    }
  })

})

exports.createMessage = (req, res, next) => {};

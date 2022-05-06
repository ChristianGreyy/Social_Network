const User = require("../models/user.model");
const Messenger = require("../models/messenger.model");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");
const AppError = require("../utils/appError");
const { response } = require("express");

exports.getMessages = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  // const senderFriends = user.friendId;

  const messengers = [];

  const messenger = await Messenger.find({ senderId: userId })
    .sort({
      updatedAt: -1,
    })
    .populate("receiverId");
  messenger.forEach((msg) => {
    let check = true;
    messengers.forEach((item) => {
      if (item.userId.toString() == msg.receiverId._id.toString()) {
        check = false;
      }
      // console.log(item.userId.toString());
      // console.log(msg.receiverId._id.toString());
    });
    if (messengers.length == 0 || check) {
      messengers.push({
        userId: msg.receiverId._id,
        fullname: msg.receiverId.lastname.concat(" ", msg.receiverId.firstname),
        avatar: msg.receiverId.avatar,
        lastMessage: msg.content || msg.image,
      });
    }
  });
  res.json({
    messengers,
  });
});

exports.getMessage = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const myUserId = req.user._id;
  // console.log("senderId: " + senderId);
  // console.log("receiverId: " + receiverId);
  // console.log(receiverId, senderId.toString());
  // const user = await  User.findOne({_id: receiverId})
  const messengers = await Messenger.find({
    $or: [
      {
        senderId: userId,
        receiverId: myUserId,
      },
      {
        senderId: myUserId,
        receiverId: userId,
      },
    ],
  })
    .populate("receiverId")
    .populate("senderId");

  res.json({
    status: httpStatus.OK,
    data: {
      messengers,
    },
  });
});

exports.postMessage = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const { content } = req.body;
  const messenger = new Messenger({
    content,
    receiverId: userId,
    senderId: req.user._id,
  });

  await messenger.save();

  res.status(httpStatus.CREATED).json({
    status: httpStatus.CREATED,
    data: {
      messenger,
    },
  });
});

exports.createMessage = (req, res, next) => {};

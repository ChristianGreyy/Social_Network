const express = require("express");
const messengerRouter = express.Router();
const messengerController = require("../controllers/messenger.controller");
const auth = require('../middlewares/auth');

messengerRouter.get("/:receiverId", auth, messengerController.getMessages);
messengerRouter.post("/:receiverId", auth, messengerController.postMessage);


// messengerRouter.post("/createMessage", auth, messengerController.createMessage);

module.exports = messengerRouter;

const express = require("express");
const messengerRouter = express.Router();
const messengerController = require("../controllers/messenger.controller");
const auth = require("../middlewares/auth");

// show messages/messengers
messengerRouter.get("/", auth, messengerController.getMessages);

// show messages/boxChat
messengerRouter.get("/:userId", auth, messengerController.getMessage);
messengerRouter.post("/:userId", auth, messengerController.postMessage);

// messengerRouter.post("/createMessage", auth, messengerController.createMessage);

module.exports = messengerRouter;

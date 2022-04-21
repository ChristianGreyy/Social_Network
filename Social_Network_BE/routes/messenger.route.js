const express = require("express");
const messengerController = require("../controllers/messenger.controller");
const messengerRouter = express.Router();

messengerRouter.get("/:senderId", messengerController.getMessages);

messengerRouter.post("/createMessage", messengerController.createMessage);

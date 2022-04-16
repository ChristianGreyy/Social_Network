const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

userRouter.get('/aggreate', userController.aggregate)


userRouter
  .route('/')
  .get(userController.getUsers)
  .post(authController.signup);

userRouter
  .route('/:userId')
  .get(userController.getUser)
  .post(userController.updateUser)
  .delete(userController.deleteUser);




module.exports = userRouter;

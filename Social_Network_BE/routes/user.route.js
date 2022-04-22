const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const auth = require('../middlewares/auth');

userRouter.get('/aggreate', userController.aggregate)


userRouter
  .route('/')
  .get(userController.getUsers)
  .post(authController.signup);

userRouter.get('/:userId', auth, userController.getUser);
userRouter.post(userController.updateUser)
userRouter.delete(userController.deleteUser);




module.exports = userRouter;

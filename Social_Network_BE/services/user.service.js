const httpStatus = require("http-status");
const { User } = require("../models");
const AppError = require("../utils/appError");

/**
 * Get all users
 * @returns {Promise<User>}
 */

const getUsers = async () => {
  const users = await User.find();
  return await User.find({});
};

module.exports = {
  getUsers,
};

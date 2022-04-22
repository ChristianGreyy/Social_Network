const catchAsync = require('../utils/catchAsync')
const httpStatus = require('http-status');
const AppError = require('../utils/appError');
const User = require('../models/user.model');
const { response } = require('express');

exports.aggregate = async (req, res, next) => {
    const user = await User.aggregate([
        {
            $match: {
                role: 'user'
            }
        },
        {
            $project: {
                password: 1,
            }
        }

    ])

    res.json({
        user,
    })

}

exports.getUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();
    res.status(httpStatus.OK).json({
        status: 'success',
        data: {
            users,
        }
    })

})

exports.getUser = catchAsync(async (req, res, next) => {

    console.log(req.user);

    const user = await User.findOne({ _id: req.params.userId }).lean();
    res.status(httpStatus.OK).json({
        status: 'success',
        data: {
            user,
        }
    })
})
exports.updateUser = catchAsync(async (req, res, next) => {
    const user = await User.findAndUpdate(req.body._id, req.body);

    res.status(httpStatus.CREATED).json({
        status: 'success',
        data: {
            user,
        }
    })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
    const user = await User.findAndRemove(req.params._id, req.body);

    res.status(httpStatus.NO_CONTENT).json({
        status: 'success',
        data: null,
    })
})
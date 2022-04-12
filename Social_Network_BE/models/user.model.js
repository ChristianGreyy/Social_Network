const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: 8,
        required: true,
    },
    role: {
        type: String,
        enum: ['amin', 'user'],
        default: 'user',
        required: true,
    },
    firstname: {
        type: String,
        // required: true,
    },
    lastname: {
        type: String,
        // required: true,
    },
    birthday: {
        type: String,
        default: Date.now(),
        // required: true,
    },
    address: {
        type: String,
    },
    passwordResetToken: {
        type: String,
    },
    passwordResetExpires: {
        type: String,
    },
    conversationId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Conversation',
        }
    ]
}, {
    timestamps: true,
})

userSchema.methods.isCorrectPassword = async function (password) {
    // console.log(password, this.password);
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch ? true : false;
}

userSchema.pre('save', async function (next) {
    // if (!this.isModified('password')) return next();
    const user = this;
    console.log(this)
    user.password = await bcrypt.hash(user.password, 7);
    return next();
})

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    // console.log({ resetToken }, this.passwordResetToken);

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model('User', userSchema)
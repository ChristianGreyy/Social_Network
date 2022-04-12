const mongoose = require('mongoose');
const { Schema } = mongoose;

const conversationSchema = new Schema({
    content: {
        type: String,
    },
    iamge: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
})

module.export = new Model('Conversation', conversationSchema);
const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: [true, 'reactionBody is a required field'],
            maxlength: [280, 'reactionBody cannot be more than 280 characters'],
        },
        username: {
            type: String,
            required: [true, 'Username is a required field'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: value => value.toDateString()
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = reactionSchema;
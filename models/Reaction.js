const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs')

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
            default: dayjs(),
            get: value => dayjs(value).format('h:mma [on] dddd, MMMM D, YYYY')
        },
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

module.exports = reactionSchema;
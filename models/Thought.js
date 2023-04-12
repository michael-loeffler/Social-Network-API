const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'thoughtText is a required field'],
            minlength: [1, 'thoughtText must be at least 1 character'],
            maxlength: [280, 'thoughtText cannot be more than 280 characters'],
        },
        createdAt: {
            type: Date,
            default: dayjs(),
            get: value => dayjs(value).format('h:mma [on] dddd, MMMM D, YYYY') // JSON response will be human-readable, but in Compass, date will still be in format unix
        },
        username: {
            type: String,
            required: [true, 'Username is a required field'],
            trim: true, 
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


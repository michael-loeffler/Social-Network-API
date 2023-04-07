const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
            default: Date.now,
            get: value => value.toDateString() // JSON should be human readable, but in Compass should still be unix
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
        }
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;


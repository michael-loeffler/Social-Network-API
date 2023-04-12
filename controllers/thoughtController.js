const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');
const dayjs = require('dayjs')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .select('-__v -reactions._id -reactions.reactionId')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                console.log(thought);
                return User.findOneAndUpdate(
                    { username: thought.username },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                )
            })
            .then((user) => {
                res.json(user)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body, },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(thought))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID' })
                    : User.findOneAndUpdate(
                        { username: thought.username },
                        { $pull: { thoughts: thought._id } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought deleted, but no user found' })
                    : res.json({ message: 'Thought successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteReaction(req, res) {
        console.log('delete route!')
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {reactionId: req.params.reactionId} } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    }

}
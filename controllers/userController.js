const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json({
                        user,
                        //   grade: await grade(req.params.studentId),
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID' })
                    : res.json(user));
    },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => // res.json({ message: 'user successfully deleted' }))
                !user
                  ? res.status(404).json({ message: 'No user found with that ID' })
                  : Thought.deleteMany(
                      { username: user.username },
                      { new: true }
                    )
              )
              .then((thought) =>
                !thought
                  ? res.status(404).json({
                      message: 'User deleted, but no thoughts found',
                    })
                  : res.json({ message: 'User and associated thoughts successfully deleted' })
              )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId} },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }

}
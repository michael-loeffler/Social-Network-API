const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
   // // example data
      // {
      //   "thoughtText": "Here's a cool thought...",
      //   "username": "lernantino",
      //   "userId": "5edff358a0fcb779aa7b118b"
      // }
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;

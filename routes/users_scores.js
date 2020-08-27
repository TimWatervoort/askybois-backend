var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const usersScoresController = require('../controllers/users_scores_controller');

// Get all name wins
router.get('/', async (req, res, next) => {
  const response = await usersScoresController.getAllUsersScores();
  return mw.handleResponse(res, response);
});

//Get name win by id
router.get('/:id', mw.checkIfExists('users_scores'), async (req, res, next) => {
  const response = await usersScoresController.getOneUserScore(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new name win
router.post('/', mw.checkIfTaken('users_scores'), async (req, res, next) => {
  const response = await usersScoresController.postOneUserScore(req.body);
  return mw.handleResponse(res, response);
});

// Update a name win by id
router.patch('/:id', mw.checkIfExists('users_scores'), async (req, res, next) => {
  const response = await usersScoresController.patchOneUserScore(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a name win by id
router.delete('/:id', mw.checkIfExists('users_scores'), async (req, res, next) => {
  const response = await usersScoresController.deleteOneUserScore(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

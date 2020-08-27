var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const answerWinsController = require('../controllers/answer_wins_controller');

// Get all answer wins
router.get('/', async (req, res, next) => {
  const response = await answerWinsController.getAllAnswerWins();
  return mw.handleResponse(res, response);
});

//Get answer win by id
router.get('/:id', mw.checkIfExists('answer_wins'), async (req, res, next) => {
  const response = await answerWinsController.getOneAnswerWin(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new answer win
router.post('/', mw.checkIfTaken('answer_wins'), async (req, res, next) => {
  const response = await answerWinsController.postOneAnswerWin(req.body);
  return mw.handleResponse(res, response);
});

// Update a answer win by id
router.patch('/:id', mw.checkIfExists('answer_wins'), async (req, res, next) => {
  const response = await answerWinsController.patchOneAnswerWin(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a answer win by id
router.delete('/:id', mw.checkIfExists('answer_wins'), async (req, res, next) => {
  const response = await answerWinsController.deleteOneAnswerWin(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

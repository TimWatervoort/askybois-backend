var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const bonusQuestionsController = require('../controllers/bonus_questions_controller');

// Get all answer wins
router.get('/', async (req, res, next) => {
  const response = await bonusQuestionsController.getAllBonusQuestions();
  return mw.handleResponse(res, response);
});

//Get answer win by id
router.get('/:id', mw.checkIfExists('bonus_questions'), async (req, res, next) => {
  const response = await bonusQuestionsController.getOneBonusQuestion(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new answer win
router.post('/', mw.checkIfTaken('bonus_questions'), async (req, res, next) => {
  const response = await bonusQuestionsController.postOneBonusQuestion(req.body);
  return mw.handleResponse(res, response);
});

// Update a answer win by id
router.patch('/:id', mw.checkIfExists('bonus_questions'), async (req, res, next) => {
  const response = await bonusQuestionsController.patchOneBonusQuestion(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a answer win by id
router.delete('/:id', mw.checkIfExists('bonus_questions'), async (req, res, next) => {
  const response = await bonusQuestionsController.deleteOneBonusQuestion(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const scoresController = require('../controllers/scores_controller');

// Get all scores
router.get('/', async (req, res, next) => {
  const response = await scoresController.getAllScores();
  return mw.handleResponse(res, response);
});

//Get score by id
router.get('/:id', mw.checkIfExists('scores'), async (req, res, next) => {
  const response = await scoresController.getOneScore(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new score
router.post('/', mw.checkIfTaken('scores'), async (req, res, next) => {
  const response = await scoresController.postOneScore(req.body);
  return mw.handleResponse(res, response);
});

// Update a score by id
router.patch('/:id', mw.checkIfExists('scores'), async (req, res, next) => {
  const response = await scoresController.patchOneScore(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a score by id
router.delete('/:id', mw.checkIfExists('scores'), async (req, res, next) => {
  const response = await scoresController.deleteOneScore(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const nameWinsController = require('../controllers/name_wins_controller');

// Get all name wins
router.get('/', async (req, res, next) => {
  const response = await nameWinsController.getAllNameWins();
  return mw.handleResponse(res, response);
});

//Get name win by id
router.get('/:id', mw.checkIfExists('name_wins'), async (req, res, next) => {
  const response = await nameWinsController.getOneNameWin(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new name win
router.post('/', mw.checkIfTaken('name_wins'), async (req, res, next) => {
  const response = await nameWinsController.postOneNameWin(req.body);
  return mw.handleResponse(res, response);
});

// Update a name win by id
router.patch('/:id', mw.checkIfExists('name_wins'), async (req, res, next) => {
  const response = await nameWinsController.patchOneNameWin(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a name win by id
router.delete('/:id', mw.checkIfExists('name_wins'), async (req, res, next) => {
  const response = await nameWinsController.deleteOneNameWin(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

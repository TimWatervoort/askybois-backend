var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const gamesController = require('../controllers/games_controller');

// Get all games
router.get('/', async (req, res, next) => {
  const response = await gamesController.getAllGames();
  return mw.handleResponse(res, response);
});

//Get Game by id
router.get('/:id', mw.checkIfExists('games'), async (req, res, next) => {
  const response = await gamesController.getOneGame(req.params.id);
  return mw.handleResponse(res, response);
});

// Create a new Game
router.post('/', async (req, res, next) => {
  const response = await gamesController.postOneGame(req.body);
  return mw.handleResponse(res, response);
});

// Update a Game by id
router.patch('/:id', mw.checkIfExists('games'), async (req, res, next) => {
  const response = await gamesController.patchOneGame(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

// Delete a Game by id
router.delete('/:id', mw.checkIfExists('games'), async (req, res, next) => {
  const response = await gamesController.deleteOneGame(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

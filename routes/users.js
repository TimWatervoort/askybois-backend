var express = require('express');
var router = express.Router();
const mw = require('../util/middlewares');
const usersController = require('../controllers/users_controller');

// Get all users
router.get('/', async (req, res, next) => {
  const response = await usersController.getAllUsers();
  return mw.handleResponse(res, response);
});

//Get user by id
router.get('/:id', mw.checkIfExists('users'), async (req, res, next) => {
  const response = await usersController.getOneUser(req.params.id);
  return mw.handleResponse(res, response);
});

router.post('/', mw.checkIfTaken('users', 'username'), async (req, res, next) => {
  const response = await usersController.postOneUser(req.body);
  return mw.handleResponse(res, response);
});

router.patch('/:id', mw.checkIfExists('users'), async (req, res, next) => {
  const response = await usersController.patchOneUser(req.params.id, req.body);
  return mw.handleResponse(res, response);
});

router.delete('/:id', mw.checkIfExists('users'), async (req, res, next) => {
  const response = await usersController.deleteOneUser(req.params.id);
  return mw.handleResponse(res, response);
});

module.exports = router;

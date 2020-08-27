const baseController = require('./base_controller');

const getAllGames = async () => {
  const response = await baseController.getAll('games');
  return response;
}

const getOneGame = async id => {
  const response = await baseController.getOne('games', id);
  return response;
}

const postOneGame = async data => {
  const response = await baseController.postOne('games', data);
  return response;
}

const patchOneGame = async (id, data) => {
  const response = await baseController.patchOne('games', id, data);
  return response;
}

const deleteOneGame = async id => {
  const response = await baseController.deleteOne('games', id);
  return response;
}

module.exports = {
  getAllGames,
  getOneGame,
  postOneGame,
  patchOneGame,
  deleteOneGame
};

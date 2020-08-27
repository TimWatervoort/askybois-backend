const baseController = require('./base_controller');

const getAllNameWins = async () => {
  const response = await baseController.getAll('name_wins');
  return response;
}

const getOneNameWin = async id => {
  const response = await baseController.getOne('name_wins', id);
  return response;
}

const postOneNameWin = async data => {
  const response = await baseController.postOne('name_wins', data);
  return response;
}

const patchOneNameWin = async (id, data) => {
  const response = await baseController.patchOne('name_wins', id, data);
  return response;
}

const deleteOneNameWin = async id => {
  const response = await baseController.deleteOne('name_wins', id);
  return response;
}

module.exports = {
  getAllNameWins,
  getOneNameWin,
  postOneNameWin,
  patchOneNameWin,
  deleteOneNameWin
};

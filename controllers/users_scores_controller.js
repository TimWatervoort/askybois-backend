const baseController = require('./base_controller');

const getAllUsersScores = async () => {
  const response = await baseController.getAll('users_scores');
  return response;
}

const getOneUserScore = async id => {
  const response = await baseController.getOne('users_scores', id);
  return response;
}

const postOneUserScore = async data => {
  const response = await baseController.postOne('users_scores', data);
  return response;
}

const patchOneUserScore = async (id, data) => {
  const response = await baseController.patchOne('users_scores', id, data);
  return response;
}

const deleteOneUserScore = async id => {
  const response = await baseController.deleteOne('users_scores', id);
  return response;
}

module.exports = {
  getAllUsersScores,
  getOneUserScore,
  postOneUserScore,
  patchOneUserScore,
  deleteOneUserScore
};

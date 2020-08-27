const baseController = require('./base_controller');

const getAllScores = async () => {
  const response = await baseController.getAll('scores');
  return response;
}

const getOneScore = async id => {
  const response = await baseController.getOne('scores', id);
  return response;
}

const postOneScore = async data => {
  const response = await baseController.postOne('scores', data);
  return response;
}

const patchOneScore = async (id, data) => {
  const response = await baseController.patchOne('scores', id, data);
  return response;
}

const deleteOneScore = async id => {
  const response = await baseController.deleteOne('scores', id);
  return response;
}

module.exports = {
  getAllScores,
  getOneScore,
  postOneScore,
  patchOneScore,
  deleteOneScore
};

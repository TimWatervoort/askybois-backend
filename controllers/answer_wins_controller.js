const baseController = require('./base_controller');

const getAllAnswerWins = async () => {
  const response = await baseController.getAll('answer_wins');
  return response;
}

const getOneAnswerWin = async id => {
  const response = await baseController.getOne('answer_wins', id);
  return response;
}

const postOneAnswerWin = async data => {
  const response = await baseController.postOne('answer_wins', data);
  return response;
}

const patchOneAnswerWin = async (id, data) => {
  const response = await baseController.patchOne('answer_wins', id, data);
  return response;
}

const deleteOneAnswerWin = async id => {
  const response = await baseController.deleteOne('answer_wins', id);
  return response;
}

module.exports = {
  getAllAnswerWins,
  getOneAnswerWin,
  postOneAnswerWin,
  patchOneAnswerWin,
  deleteOneAnswerWin
};

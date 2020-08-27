const baseController = require('./base_controller');

const getAllBonusQuestions = async () => {
  const response = await baseController.getAll('bonus_questions');
  return response;
}

const getOneBonusQuestion = async id => {
  const response = await baseController.getOne('bonus_questions', id);
  return response;
}

const postOneBonusQuestion = async data => {
  const response = await baseController.postOne('bonus_questions', data);
  return response;
}

const patchOneBonusQuestion = async (id, data) => {
  const response = await baseController.patchOne('bonus_questions', id, data);
  return response;
}

const deleteOneBonusQuestion = async id => {
  const response = await baseController.deleteOne('bonus_questions', id);
  return response;
}

module.exports = {
  getAllBonusQuestions,
  getOneBonusQuestion,
  postOneBonusQuestion,
  patchOneBonusQuestion,
  deleteOneBonusQuestion
};

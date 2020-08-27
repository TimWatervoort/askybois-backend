const baseController = require('./base_controller');

const getAllUsers = async () => {
  const response = await baseController.getAll('users');
  return response;
}

const getOneUser = async id => {
  const response = await baseController.getOne('users', id);
  return response;
}

const postOneUser = async data => {
  const response = await baseController.postOne('users', data);
  return response;
}

const patchOneUser = async (id, data) => {
  const response = await baseController.patchOne('users', id, data);
  return response;
}

const deleteOneUser = async id => {
  const response = await baseController.deleteOne('users', id);
  return response;
}

module.exports = {
  getAllUsers,
  getOneUser,
  postOneUser,
  patchOneUser,
  deleteOneUser
};

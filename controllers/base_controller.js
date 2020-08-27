const knex = require('../knex');
const formatter = require('../util/formatter');

// Reusable database calls

const getAll = async resource => {
  try {
    const response = await knex(resource);
    return response;
  } catch (error) {
    return { error };
  }
}

const getOne = async (resource, id) => {
  try {
    const response = await knex(resource).where('id', id);
    return response[0];
  } catch (error) {
    return { error };
  }
}

const postOne = async (resource, data) => {
  try {
    const response = await knex(resource)
    .insert(data)
    .returning('*');
    return response;
  } catch (error) {
    return { error };
  }
}

const patchOne = async (resource, id, data) => {
  try {
    const originalEntry = await knex(resource)
    .where('id', id);
    const newEntry = formatter.formatPatchData(originalEntry[0], data);
    const response = await knex(resource)
    .where('id', id)
    .update(newEntry)
    .returning('*');
    return response[0];
  } catch (error) {
    return { error };
  }
}

const deleteOne = async (resource, id) => {
  try {
    const response = await knex(resource)
    .where('id', id)
    .returning('*')
    .del();
    return response[0];
  } catch (error) {
    return { error };
  }
}

module.exports = {
  getAll,
  getOne,
  postOne,
  patchOne,
  deleteOne
};

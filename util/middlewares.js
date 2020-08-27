const knex = require('../knex');

// Reusable error handler
const handleError = (res, error = 'Something went wrong.', status = 500) => {
  const errorMessage = {
    message: {
      error
    }
  }
  res.status(status).send(errorMessage);
}

// Reusable response handler
const handleResponse = (res, response) => {
  if (response.error) {
    handleError(res, response.error);
  } else {
    res.send(response);
  }
}

// Check if item exists by id
const checkIfExists = resource => {
  return async (req, res, next) => {
    const response = await knex(resource).where('id', req.params.id);
    if (response.length === 0) {
      handleError(res, 'Not found.', 400);
    } else {
      next();
    };
  }
}

// Check if a key has been taken yet
const checkIfTaken = (resource, key) => {
  return async (req, res, next) => {
    const response = await knex(resource)
    .where(key, req.body[key]);
    if (response.length > 0) {
      handleError(res, `${key} already exists.`, 400);
    } else {
      next();
    }
  }
}

module.exports = {
  handleError,
  checkIfExists,
  handleResponse,
  checkIfTaken
};

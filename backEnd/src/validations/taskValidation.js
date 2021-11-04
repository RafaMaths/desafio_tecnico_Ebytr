const Joi = require('joi');
const { ObjectId } = require('mongodb');
const CODE = require('http-status-codes');
const { getTaskById } = require('../models/taskModel');

const taskValidations = (task, statusTask) => {
  const { error } = Joi.object(
    {
      task: Joi.string().required().not().empty(),
      statusTask: Joi.string().required().not().empty()
        .max(15),
    },
  ).validate({ task, statusTask });

  if (error) {
    return {
      message: error.details[0].message,
      code: CODE.UNPROCESSABLE_ENTITY,
    };
  }

  return true;
};

const taskValidationsId = async ({ id }) => {
  if (!ObjectId.isValid(id)) {
    return {
      message: 'invalid id',
      code: CODE.NOT_FOUND,
    };
  }

  const existTask = await getTaskById({ id });

  if (!existTask) {
    return {
      message: 'this task not exist',
      code: CODE.NOT_FOUND,
    };
  }

  return true;
};

module.exports = { taskValidations, taskValidationsId };
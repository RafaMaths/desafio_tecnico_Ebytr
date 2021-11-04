const {
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../models/taskModel');

const { taskValidations, taskValidationsId } = require('../validations/taskValidation');

const createTask_Service = async ({ task, statusTask }) => {
  const validations = taskValidations(task, statusTask);

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }

  const tasks = await createTask({ task, statusTask });
  return tasks;
};

const getTaskById_Service = async ({ id }) => {
  const validateId = await taskValidationsId({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  const tasks = await getTaskById({ id });
  return tasks;
};

const updateTask_Service = async ({ task, statusTask }, id) => {
  const validateId = await taskValidationsId({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  const validations = taskValidations(task, statusTask);

  if (validations.message) {
    return {
      message: validations.message,
      code: validations.code,
    };
  }

  await updateTask({ task, statusTask }, id);
  return { _id: id, task, statusTask };
};

const deleteTask_Service = async ({ id }) => {
  const validateId = await taskValidationsId({ id });

  if (validateId.message) {
    return {
      message: validateId.message,
      code: validateId.code,
    };
  }

  return deleteTask({ id });
};

module.exports = {
  createTask_Service,
  getTaskById_Service,
  updateTask_Service,
  deleteTask_Service,
};
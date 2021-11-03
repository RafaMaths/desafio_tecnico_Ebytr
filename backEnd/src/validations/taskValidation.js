const Joi = require('joi');
const CODE = require('http-status-codes');

const isValidTask = (task, statusTask) => {
  const {error} = Joi.object({
    task: Joi.string().required().min(3).not().empty(),
    statusTask: Joi.string().required().min(3).not().empty(),
  }).validate(task, statusTask);

  if (error) {
    return {
      isError: true,
      message: error.details[0].message,
      code: CODE.UNPROCESSABLE_ENTITY
    };
  };
  return {isError: false};
};

module.exports = {isValidTask};
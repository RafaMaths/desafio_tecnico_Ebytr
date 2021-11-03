const CODE = require('http-status-codes');
const {createTask} = require('../models/taskModel');

const createTask = async (req, res) => {
  const {task, statusTask } = req.body;

  const task = await createTask({task, statusTask});

  return res.status(CODE.CREATED).json({task});
};

module.exports = {
  createTask
}




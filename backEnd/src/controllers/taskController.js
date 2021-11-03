const CODE = require('http-status-codes');
const {createTask, getAllTask} = require('../models/taskModel');

const createTask_Control = async (req, res) => {
  const {task, statusTask } = req.body;

  const taskCreated = await createTask({task, statusTask});

  return res.status(CODE.CREATED).json(taskCreated);
};

const getAllTask_Control = async (req, res) => {
  const allTasks = await getAllTask();
  return res.status(CODE.OK).json(allTasks);
}

module.exports = {
  createTask_Control,
  getAllTask_Control
}




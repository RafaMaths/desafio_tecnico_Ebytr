const CODE = require('http-status-codes');
const {createTask, getAllTask, getTaskById, updateTask, deleteTask} = require('../models/taskModel');

const createTask_Control = async (req, res) => {
  const {task, statusTask } = req.body;

  const taskCreated = await createTask({task, statusTask});

  return res.status(CODE.CREATED).json(taskCreated);
};

const getAllTask_Control = async (req, res) => {
  const allTasks = await getAllTask();
  return res.status(CODE.OK).json(allTasks);
};

const getTaskById_Control = async (req, res) => {
  const { id } = req.params;
  const taskById = await getTaskById(id);

  return res.status(CODE.OK).json(taskById);
};

const updateTask_Control = async (req, res) => {
  const {task, statusTask} = req.body;
  const {id} = req.params;

  const taskUpdate = await updateTask({ task, statusTask }, id);

  return res.status(CODE.OK).json(taskUpdate);
};

const deleteTask_Control = async (req, res) => {
  const { id } = req.params;

  const delTask = await deleteTask({id});
  return res.status(CODE.NO_CONTENT).json(delTask);
};

module.exports = {
  createTask_Control,
  getAllTask_Control,
  getTaskById_Control,
  updateTask_Control,
  deleteTask_Control
};

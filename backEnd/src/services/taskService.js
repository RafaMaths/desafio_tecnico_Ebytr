const CODE = require('http-status-codes');
const {
  createTask,
  getAllTask,
  getTaskById,
  updateTask,
  deleteTask
} = require('../models/taskModel');

const createTask_Service = async({task, statusTask}) => {};

const getAllTask_Service = async () => {
  const task = await getAllTask();
  return { tasksData: [...task] };
};

const getTaskById_Service = async(id) => {};

const updateTask_Service = async ({task, statusTask}, id) => {};

const deleteTask_Service = async ({id}) => {};

module.exports = {
  createTask_Service,
  getAllTask_Service,
  getTaskById_Service,
  updateTask_Service,
  deleteTask_Service
};

const CODE = require('http-status-codes');
const  {getAllTask}  = require('../models/taskModel');
const {
  createTask_Service,
  getTaskById_Service,
  updateTask_Service,
  deleteTask_Service,
} = require('../services/taskService');

const createTask_Control = async (req, res) => {
  const {task, statusTask } = req.body;

  const createTask = await createTask_Service({task, statusTask});

  if (createTask.message) {
    return res.status(createTask.code).json({
      message: createTask.message,
    });
  };
  
  return res.status(CODE.CREATED).json(createTask);
};

const getAllTask_Control = async (req, res) => {
  const allTasks = await getAllTask();
  return res.status(CODE.OK).json(allTasks);
};

const getTaskById_Control = async (req, res) => {
  const { id } = req.params;
  const taskById = await getTaskById_Service({id});

  if (taskById.message) {
    return res.status(taskById.code).json({
      message: taskById.message,
    });
  };

  return res.status(CODE.OK).json(taskById);
};

const updateTask_Control = async (req, res) => {
  const {task, statusTask} = req.body;
  const {id} = req.params;

  const taskUpdate = await updateTask_Service({ task, statusTask }, id);

  if (taskUpdate.message) {
    return res.status(taskUpdate.code).json({
      message: taskUpdate.message,
    });
  }

  return res.status(CODE.OK).json(taskUpdate);
};

const deleteTask_Control = async (req, res) => {
  const { id } = req.params;

  const delTask = await deleteTask_Service({id});

  if (delTask.message) {
    return res.status(delTask.code).json({
      message: delTask.message,
    });
  }
  return res.status(CODE.NO_CONTENT).json({message: 'Tarefa deletada com sucesso!'});
};

module.exports = {
  createTask_Control,
  getAllTask_Control,
  getTaskById_Control,
  updateTask_Control,
  deleteTask_Control
};

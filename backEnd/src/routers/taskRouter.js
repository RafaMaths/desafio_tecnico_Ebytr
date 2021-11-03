const express = require('express');
const {
  createTask_Control,
  getAllTask_Control,
  getTaskById_Control,
  updateTask_Control,
  deleteTask_Control
} = require('../controllers/taskController')

const router = express.Router();

router.post('/', createTask_Control);
router.get('/:id', getTaskById_Control);
router.get('/', getAllTask_Control);
router.put('/:id', updateTask_Control)
router.delete('/:id', deleteTask_Control);

module.exports = router;
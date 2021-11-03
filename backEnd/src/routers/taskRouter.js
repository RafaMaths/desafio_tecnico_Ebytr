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
router.get('/', getAllTask_Control);
router.get('/', getTaskById_Control);
router.put('/', updateTask_Control)
router.delete('/', deleteTask_Control);

module.exports = router;
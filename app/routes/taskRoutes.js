const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();

function createTaskRoutes(taskController) {
    router.post('/tasks', taskController.createTask.bind(taskController));
    router.get('/tasks', taskController.getAllTasks.bind(taskController));
    router.get('/tasks/:task_id', taskController.getTaskById.bind(taskController));
    router.delete('/tasks/:task_id', taskController.deleteTaskById.bind(taskController));

    return router;
}

module.exports = createTaskRoutes;

class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    createTask(req, res) {
        const task = req.body;
        this.taskService.createTaskService(task, (err, newTask) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error creating task.' });
            }
            res.status(201).json(newTask);
        });
    }

    getAllTasks(req, res) {
        this.taskService.getAllTasksService((err, tasks) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving tasks.' });
            }
            res.json(tasks);
        });
    }

    getTaskById(req, res) {
        const { task_id } = req.params;
        this.taskService.getTaskByIdService(task_id, (err, task) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving task.' });
            }
            if (!task) {
                return res.status(404).json({ error: 'Task not found.' });
            }
            res.json(task);
        });
    }

    deleteTaskById(req, res) {
        const { task_id } = req.params;
        this.taskService.deleteTaskByIdService(task_id, (err) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error while deleting task.' });
            }
            res.status(204).send();
        });
    }
}

module.exports = TaskController;

class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    createTaskService(task, callback) {
        this.taskRepository.createTaskRepository(task, callback);
    }

    getAllTasksService(callback) {
        this.taskRepository.getAllTasksRepository(callback);
    }

    getTaskByIdService(task_id, callback) {
        this.taskRepository.getTaskByIdRepository(task_id, callback);
    }

    deleteTaskByIdService(task_id, callback) {
        this.taskRepository.deleteTaskByIdRepository(task_id, callback);
    }
}

module.exports = TaskService;

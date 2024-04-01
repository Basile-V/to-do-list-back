const { v4: uuidv4 } = require('uuid');

class TaskRepository {
    constructor(db) {
        this.db = db;
    }

    createTaskRepository(task, callback) {
        const { name, final_date, user_id, parent_task_id, time_scale, done, theme_id, goal_id } = task;
        const task_id = uuidv4();

        this.db.run(`INSERT INTO task (task_id, name, final_date, user_id, parent_task_id, time_scale, done, theme_id, goal_id, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [task_id, name, final_date, user_id, parent_task_id, time_scale, done, theme_id, goal_id],
            function (err) {
                callback(err, { task_id, name, final_date, user_id, parent_task_id, time_scale, done, theme_id, goal_id });
            });
    }

    getAllTasksRepository(callback) {
        this.db.all('SELECT * FROM task', callback);
    }

    getTaskByIdRepository(task_id, callback) {
        this.db.get('SELECT * FROM task WHERE task_id = ?', [task_id], callback);
    }

    deleteTaskByIdRepository(task_id, callback) {
        this.db.run('DELETE FROM task WHERE task_id = ?', [task_id], callback);
    }
}

module.exports = TaskRepository;

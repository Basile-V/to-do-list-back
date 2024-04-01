const { v4: uuidv4 } = require('uuid');


class GoalRepository {
    constructor(db) {
        this.db = db;
    }
    createGoalRepository(goal, callback) {
        const { name, wish } = goal;
        const goal_id = uuidv4();

        this.db.run(`INSERT INTO goal (goal_id, name, wish, created_at) VALUES (?, ?, ?, ?)`,
            [goal_id, name, wish],
            function (err) {
                callback(err, { goal_id, name, wish });
            });
    }

    getAllGoalsRepository(callback) {
        this.db.all('SELECT * FROM goal', callback);
    }

    getGoalByIdRepository(goal_id, callback) {
        this.db.get('SELECT * FROM goal WHERE goal_id = ?', [goal_id], callback);
    }
}

module.exports = GoalRepository;

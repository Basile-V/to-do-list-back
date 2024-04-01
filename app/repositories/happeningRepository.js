const { v4: uuidv4 } = require('uuid');

class HappeningRepository {
    constructor(db) {
        this.db = db;
    }
    createHappeningRepository(happening, callback) {
        const { task_id, note, moment, percentage } = happening;
        const happening_id = uuidv4();

        this.db.run(`INSERT INTO happening (happening_id, task_id, note, moment, percentage, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [happening_id, task_id, note, moment, percentage],
            function (err) {
                callback(err, { happening_id, task_id, note, moment, percentage });
            });
    }

    getAllHappeningsRepository(callback) {
        this.db.all('SELECT * FROM happening', callback);
    }

    getHappeningByIdRepository(happening_id, callback) {
        this.db.get('SELECT * FROM happening WHERE happening_id = ?', [happening_id], callback);
    }
}

module.exports = HappeningRepository;

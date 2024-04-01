const { v4: uuidv4 } = require('uuid');

class FeelingRepository {

    constructor(db) {
        this.db = db;
    }
    createFeelingRepository(feeling, callback) {
        const { user_id, name, mark } = feeling;
        const feeling_id = uuidv4();

        this.db.run(`INSERT INTO feeling (feeling_id, user_id, name, mark, created_at) VALUES (?, ?, ?, ?, ?)`,
            [feeling_id, user_id, name, mark],
            function (err) {
                callback(err, { feeling_id, user_id, name, mark });
            });
    }

    getAllFeelingsRepository(callback) {
        this.db.all('SELECT * FROM feeling', callback);
    }

    getFeelingByIdRepository(feeling_id, callback) {
        this.db.get('SELECT * FROM feeling WHERE feeling_id = ?', [feeling_id], callback);
    }
}

module.exports = FeelingRepository;

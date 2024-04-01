const { v4: uuidv4 } = require('uuid');
class UserRepository {
    constructor(db) {
        this.db = db;
    }
    createUserRepository(username, role, callback) {
        const user_id = uuidv4();
        this.db.run('INSERT INTO user (user_id, username, role, created_at) VALUES (?, ?, ?, ?)',
            [user_id, username, role], function (err) {
                callback(err, { user_id, username, role });
            });
    }

    getAllUsersRepository(callback) {
        this.db.all('SELECT * FROM user', callback);
    }

    getUserByIdRepository(user_id, callback) {
        this.db.get('SELECT * FROM user WHERE user_id = ?', [user_id], callback);
    }
}

module.exports = UserRepository;

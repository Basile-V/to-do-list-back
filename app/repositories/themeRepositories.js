const { v4: uuidv4 } = require('uuid');


class ThemeRepository {
    constructor(db) {
        this.db = db;
    }
    createThemeRepository(theme, callback) {
        const { name } = theme;
        const theme_id = uuidv4();

        this.db.run(`INSERT INTO theme (theme_id, name, created_at) VALUES (?, ?, ?)`,
            [theme_id, name],
            function (err) {
                callback(err, { theme_id, name });
            });
    }

    getAllThemesRepository(callback) {
        this.db.all('SELECT * FROM theme', callback);
    }

    getThemeByIdRepository(theme_id, callback) {
        this.db.get('SELECT * FROM theme WHERE theme_id = ?', [theme_id], callback);
    }
}

module.exports = ThemeRepository;

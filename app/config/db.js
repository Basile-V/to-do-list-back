const sqlite3 = require("sqlite3").verbose();

// Chemin vers votre base de données SQLite
const dbPath = "db/to-do-list.db";

// Création d"une nouvelle instance de la base de données SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erreur lors de l'ouverture de la base de données : ", err.message);
    } else {
        console.log("Connexion à la base de données SQLite réussie.");
    }
});

module.exports = db;

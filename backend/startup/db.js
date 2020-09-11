const sqlite3 = require('sqlite3').verbose();

// open the database
const db = new sqlite3.Database('./db_folder/db_Gas_Stations.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the GASS database.');
});


module.exports = db;
const express = require("express");
const db = require('../startup/db');
const router = express.Router();

const getAll = 'SELECT * FROM Gas_DB2';
let getStationsById = `SELECT * FROM Gas_DB2 where name LIKE ?`;



//select all
router.get("/", async (req, res) => {
    try {
        let query_result = null
        await db.all(getAll, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            query_result = rows;
            res.send(query_result);
        });

    } catch (error) {
        console.log("asyncSqliteQuery -> error", error)
    }
  });

  //select by name

  router.get("/api/gasStations?", async (req, res) => {
    try {
        await db.all(getStationsById, [req.query.companyName], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            res.send(rows);
        });

    } catch (error) {
        console.log("asyncSqliteQuery -> error", error)
    }
  });

  module.exports = router;
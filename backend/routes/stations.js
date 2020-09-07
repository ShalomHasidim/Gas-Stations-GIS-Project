const express = require("express");
const db = require('../startup/db');
const router = express.Router();

const getAll = 'SELECT * FROM fulesop';
const getStationsById = `SELECT * FROM fulesop where name = ?`;

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


  
  router.get("/api/gas/:name", async (req, res) => {
    try {
        let query_result = null
        await db.all(getStationsById, [req.params.name], (err, rows) => {
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

  module.exports = router;
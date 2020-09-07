const express = require("express");
const db = require('../startup/db');
const router = express.Router();


const query = 'SELECT * FROM fulesop';

router.get("/", async (req, res) => {
    try {
        let query_result = null
        await db.all(query, [], (err, rows) => {

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
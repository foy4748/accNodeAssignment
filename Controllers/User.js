const express = require("express");
const CRUD = require("../Lib/CRUD");

const router = express.Router();

router.get("/all", async (req, res) => {
  CRUD.read(req, res, "../data.json", (readData) => {
    res.end(readData);
  });
});

module.exports = router;

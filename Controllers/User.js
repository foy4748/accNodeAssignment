const express = require("express");
const CRUD = require("../Lib/CRUD");

const router = express.Router();

router.get("/random", async (req, res) => {
  CRUD.read(req, res, "../data.json", (readData) => {
    const data = JSON.parse(readData);
    const idx = Math.floor(Math.random() * data.length);
    return res.send(data[idx]);
  });
});

router.get("/all", async (req, res) => {
  CRUD.read(req, res, "../data.json", (readData) => {
    return res.end(readData);
  });
});

module.exports = router;

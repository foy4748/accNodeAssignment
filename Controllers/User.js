const express = require("express");
const CRUD = require("../Lib/CRUD");

const router = express.Router();
const dataPath = `${global.projectRoot}/data.json`;

router.get("/random", (req, res) => {
  CRUD.read(req, res, dataPath, (data) => {
    const idx = Math.floor(Math.random() * data.length);
    return res.send(data[idx]);
  });
});

router.get("/all", (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    return res.send(readData);
  });
});

router.post("/save", (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    console.log(req.body);
    const newData = [...readData, req.body];
    CRUD.write(req, res, dataPath, newData, (isWritten) => {
      if (isWritten) {
        res.send({ error: false, message: " Successfully saved new User" });
      }
    });
  });
});

module.exports = router;

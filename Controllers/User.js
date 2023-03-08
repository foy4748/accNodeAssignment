const express = require("express");
const CRUD = require("../Lib/CRUD");

const router = express.Router();
const dataPath = `${global.projectRoot}/data.json`;

// GET - A RANDOM USER
router.get("/random", (req, res) => {
  CRUD.read(req, res, dataPath, (data) => {
    const idx = Math.floor(Math.random() * data.length);
    return res.send(data[idx]);
  });
});

// GET - ALL USERS
router.get("/all", (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    return res.send(readData);
  });
});

// POST - SAVE A USER
router.post("/save", (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    const newData = [...readData, req.body];
    CRUD.write(req, res, dataPath, newData, (isWritten) => {
      if (isWritten) {
        res.send({ error: false, message: " Successfully saved new User" });
      }
    });
  });
});

// PATCH - UPDATE A SINGLE USER
router.patch("/update", (req, res) => {
  console.log(req.body);
  CRUD.read(req, res, dataPath, (readData) => {
    for (let item of readData) {
      if (item.id == req.body.id) {
        for (const prop in req.body) {
          item[prop] = req.body[prop];
        }
      }
    }

    CRUD.write(req, res, dataPath, readData, (isWritten) => {
      if (isWritten)
        res.send({ error: false, message: "Updated Successfully" });
    });
  });
});

// DELETE - A SINGLE USER
router.delete("/delete", (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    const newData = readData.filter((item) => item.id != req.body.id);

    CRUD.write(req, res, dataPath, newData, (isWritten) => {
      if (isWritten)
        res.send({ error: false, message: "Deleted Successfully" });
    });
  });
});
module.exports = router;

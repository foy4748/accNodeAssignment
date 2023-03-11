const express = require("express");
const CRUD = require("../Lib/CRUD");
const { NewUserValidator } = require("../Validators/NewUserValidator");
const UserIdValidator = require("../Validators/UsesrIdValidator");
const BulkEntryValidator = require("../Validators/BulkEntryValidator");

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
    const { limit } = req.query;
    if (limit) {
      return res.send(readData.slice(0, parseInt(limit)));
    }
    return res.send(readData);
  });
});

// POST - SAVE A USER
router.post("/save", NewUserValidator, (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    const newEntry = req.body;
    newEntry["id"] = readData.length + 1;
    const newData = [...readData, newEntry];
    CRUD.write(req, res, dataPath, newData, (isWritten) => {
      if (isWritten) {
        res.send({ error: false, message: " Successfully saved new User" });
      }
    });
  });
});

// PATCH - UPDATE A SINGLE USER
router.patch("/update", UserIdValidator, (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    const isFound = readData.find(
      (item) => parseInt(item.id) == parseInt(req.body.id)
    );

    // In case of User with the provided ID
    // Doesn't exists
    if (!isFound) {
      return res.send({
        error: true,
        message: `User with ID: ${req.body.id} doesn't exists`,
      });
    }

    for (let item of readData) {
      if (parseInt(item.id) == parseInt(req.body.id)) {
        for (const prop in req.body) {
          item[prop] = req.body[prop];
        }
      }
    }

    CRUD.write(req, res, dataPath, readData, (isWritten) => {
      if (isWritten && isFound)
        res.send({ error: false, message: "Updated Successfully" });
    });
  });
});

// PATCH - MULTIPLE USERS
router.patch("/bulk-update", BulkEntryValidator, (req, res) => {
  try {
    CRUD.read(req, res, dataPath, (readData) => {
      const entries = req.body;

      // WARNING - Time Complexity -->  O(n^2)
      for (let entry of entries) {
        for (let item of readData) {
          if (parseInt(item.id) == parseInt(entry.id)) {
            for (let key in item) {
              //		  Replaces previous field : Otherwise keeps the previous
              item[key] = entry[key] ? entry[key] : item[key];
            }
          }
        }
      }
      CRUD.write(req, res, dataPath, readData, (isWritten) => {
        if (isWritten)
          res.send({
            error: false,
            message: "Updated Multiple Entries",
            info: "Users corresponding to non-existing ID(s) are not updated",
            exceptions: req.exceptions,
          });
      });
    });
  } catch (error) {
    res.send(error);
  }
});

// DELETE - A SINGLE USER
router.delete("/delete", UserIdValidator, (req, res) => {
  CRUD.read(req, res, dataPath, (readData) => {
    const isFound = readData.find(
      (item) => parseInt(item.id) == parseInt(req.body.id)
    );

    // In case of User with the provided ID
    // Doesn't exists
    if (!isFound) {
      return res.send({
        error: true,
        message: `User with ID: ${req.body.id} doesn't exists`,
      });
    }

    const newData = readData.filter(
      (item) => parseInt(item.id) != parseInt(req.body.id)
    );

    CRUD.write(req, res, dataPath, newData, (isWritten) => {
      if (isWritten && isFound)
        res.send({ error: false, message: "Deleted Successfully" });
    });
  });
});
module.exports = router;

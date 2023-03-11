const fs = require("fs");

const CRUD = {};

const commonErrorResponse = {
  error: true,
  message: "Internal Server Error",
};
const commonOptions = { encoding: "utf8" };

// READ Functionality
CRUD.read = function (req, res, filePath, cb) {
  fs.readFile(filePath, commonOptions, (error, foundData) => {
    if (error) {
      console.error(error);
      res.status(501).send(commonErrorResponse);
      return;
    }
    const jsonData = JSON.parse(foundData);
    cb(jsonData);
  });
};

// WRITE Functionality
CRUD.write = function (req, res, filePath, updatedData, cb) {
  const stringified = JSON.stringify(updatedData);
  fs.writeFile(filePath, stringified, commonOptions, (error) => {
    if (error) {
      console.error(error);
      res.send(commonErrorResponse);
      res.end();
      return;
    }
    cb(true);
  });
};

module.exports = CRUD;

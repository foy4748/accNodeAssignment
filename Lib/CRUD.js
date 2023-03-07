const fs = require("fs");

const CRUD = {};
const commonErrorResponse = {
  error: true,
  message: "Internal Server Error",
};

// READ Functionality
CRUD.read = async function (req, res, filePath, cb) {
  let data;
  fs.readFile(filePath, { encoding: "utf8" }, (error, foundData) => {
    if (error) {
      console.error(error);
      res.status(501).send(commonErrorResponse);
      return;
    }
    console.log("crud", foundData);
    cb(foundData);
  });
};

module.exports = CRUD;

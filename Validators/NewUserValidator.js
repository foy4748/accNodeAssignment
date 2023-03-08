function detectMissingFields(entry) {
  const requiredFields = ["name", "gender", "contact", "address", "photoUrl"];
  const availableFields = Object.keys(entry);
  const missingFieldsArray = [];

  for (const prop of requiredFields) {
    if (!availableFields.includes(prop)) {
      missingFieldsArray.push(prop);
    }
  }
  return missingFieldsArray;
}
const NewUserValidator = (req, res, next) => {
  const newEntry = req.body;
  const missingFields = detectMissingFields(newEntry);

  if (missingFields.length > 0) {
    return res.send({
      error: true,
      message: `${missingFields.join(", ")} -- these fields are missing`,
    });
  } else {
    next();
  }
};
module.exports = { NewUserValidator, detectMissingFields };

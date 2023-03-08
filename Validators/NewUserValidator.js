const NewUserValidator = (req, res, next) => {
  const newEntry = req.body;
  const requiredFields = ["name", "gender", "contact", "address", "photoUrl"];
  const availableFields = Object.keys(newEntry);
  const missingFields = [];

  for (const prop of requiredFields) {
    if (!availableFields.includes(prop)) {
      missingFields.push(prop);
    }
  }
  console.log(missingFields);

  if (missingFields.length > 0) {
    return res.send({
      error: true,
      message: `${missingFields.join(", ")} -- these fields are missing`,
    });
  } else {
    next();
  }
};
module.exports = NewUserValidator;

function BulkEntryValidator(req, res, next) {
  // For storing exceptions for each entries
  req.exceptions = [];

  const possibleFields = [
    "id",
    "name",
    "gender",
    "contact",
    "address",
    "photoUrl",
  ];
  const entries = req.body;
  for (let entry of entries) {
    const availableFields = Object.keys(entry);
    const invalidFields = [];

    for (let field of availableFields) {
      if (!possibleFields.includes(field)) {
        invalidFields.push(field);
      }
    }
    if (invalidFields.length) {
      const exceptionObj = {
        attemptingToUpdate: entry.id,
        invalidFields,
      };
      req.exceptions.push(exceptionObj);
    }
  }
  next();
}
module.exports = BulkEntryValidator;

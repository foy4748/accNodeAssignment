function UserIdValidator(req, res, next) {
  const { id } = req.body;
  if (!isNaN(id)) {
    next();
  } else {
    res.send({ error: true, message: "Invalid User Id" });
  }
}

module.exports = UserIdValidator;

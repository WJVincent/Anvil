const { check } = require("express-validator");
const { handleValidationErrors } = require("../validation.js");

const validateLogin = [
  check("credentials")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please provide a valid email or username."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

module.exports = validateLogin;

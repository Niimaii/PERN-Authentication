const { check } = require("express-validator");
const db = require("../db");

// Password - withMessage() sends a message when there is an error
const password = check("password")
  .isLength({ min: 6, max: 15 })
  .withMessage("Password has to be betweem 6-15 characters");

// Email - isEmail() checks if it's an email with proper formatting
const email = check("email")
  .isEmail()
  .withMessage("Please provide a valid email");

// Check if email exists - "value" in the async function represents the email that the user typed
const emailExists = check("email").custom(async (value) => {
  // This destructures "rows" from the query response. The query is attempting to see if any of the data has a email that is equal to the users email.
  const { rows } = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);

  //   If the above query finds another user with the same email, then throw an error
  if (rows.length) {
    throw new Error("Email already exists");
  }
});

module.exports = {
  registerValidation: [email, password, emailExists],
};

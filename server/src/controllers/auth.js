const db = require("../db/index");
const { hash } = require("bcryptjs");
const { SECRET } = require("../constants/index");
const { sign } = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");
    res.status(200).json({
      sucess: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Inserting the incrypted password and standard email into db
    const hashedPassword = await hash(password, 10);
    await db.query("INSERT INTO users(email, password) VALUES ($1, $2)", [
      email,
      hashedPassword,
    ]);

    return res.status(201).json({
      sucess: true,
      message: "The registration was successful",
    });

    console.log("validation passed");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  // This was passed down from the loginFieldsCheck function in auth/validator
  let user = req.user;
  payload = {
    id: user.user_id,
    email: user.email,
  };

  try {
    const token = await sign(payload, SECRET);

    // *TODO* go over cookie
    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.protected = async (req, res) => {
  try {
    const { rows } = await db.query("select user_id, email from users");
    res.status(200).json({
      info: "prtected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};

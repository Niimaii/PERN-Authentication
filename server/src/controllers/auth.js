const db = require("../db/index");
const { hash } = require("bcryptjs");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select * from users");
    res.json(rows);
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

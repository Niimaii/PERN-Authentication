const db = require("../db/index");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("select * from users");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
  }
};

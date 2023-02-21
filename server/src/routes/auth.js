const { Router } = require("express");
const { getUsers } = require("../controllers/auth");
const { registerValidation } = require("../validators/auth");
const router = Router();

router.get("/get-users", getUsers);

module.exports = router;

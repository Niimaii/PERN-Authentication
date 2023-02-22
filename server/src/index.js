const express = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants/index");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

// import passport middleware
require("./middlewares/passport-middleware");

// Initialize Middlewares - Allows node send and recieve JSON from the client
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize());

// Import Routes
const authRoutes = require("./routes/auth");

// Initialize Routes
app.use("/api", authRoutes);

// App Start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

appStart();

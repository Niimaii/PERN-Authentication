const express = require("express");
const app = express();
const { PORT } = require("./constants/index");
const cookieParser = require("cookie-parser");

// Initialize Middlewares - Allows node send and recieve JSON from the client
app.use(express.json());
app.use(cookieParser());

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

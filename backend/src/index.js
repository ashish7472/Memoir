const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Set default values for environment variables
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://memoirf.netlify.app";

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
  "http://localhost:5173",
  "https://memoirf.netlify.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Clean the origin by removing trailing slash
      const cleanOrigin = origin.replace(/\/$/, "");
      
      // Check if origin is in allowed list
      if (allowedOrigins.includes(cleanOrigin)) {
        return callback(null, true);
      }
      
      // For production, also allow any subdomain of your domain
      if (process.env.NODE_ENV === 'production') {
        const frontendUrl = process.env.FRONTEND_URL || "https://memoirf.netlify.app";
        const frontendDomain = new URL(frontendUrl).hostname;
        const originDomain = new URL(origin).hostname;
        
        if (originDomain === frontendDomain || originDomain.endsWith('.' + frontendDomain)) {
          return callback(null, true);
        }
      }
      
      console.log(`CORS blocked origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  })
);


const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const entryRoutes = require("./routes/entryRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/entries", entryRoutes);

connectDB()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
      console.log(`Frontend URL: ${FRONTEND_URL}`);
    });
  })
  .catch((error) => {
    console.log("Database not connected! " + error);
  });

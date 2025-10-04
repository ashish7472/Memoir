const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const JWT_SECRET = process.env.JWT_SECRET || "your_default_jwt_secret_key_change_in_production";
  const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: "7d" });

  // Determine if we're in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  res.cookie("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: isProduction, // Only secure in production (HTTPS)
    sameSite: isProduction ? "None" : "Lax", // None for production, Lax for development
    domain: isProduction ? undefined : undefined, // Let browser handle domain in production
  });
};

module.exports = generateToken;

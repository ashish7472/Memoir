const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const JWT_SECRET = process.env.JWT_SECRET || "nillu@5678";
  const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: "7d" });

  // Determine if we're in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Log for debugging
  console.log(`Setting cookie - Production: ${isProduction}, Secure: ${isProduction}, SameSite: ${isProduction ? 'None' : 'Lax'}`);
  
  res.cookie("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: isProduction, // Only secure in production (HTTPS)
    sameSite: isProduction ? "None" : "Lax", // None for production, Lax for development
    path: "/", // Ensure cookie is available for all paths
  });
};

module.exports = generateToken;

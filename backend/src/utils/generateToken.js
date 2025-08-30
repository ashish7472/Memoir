const jwt = require("jsonwebtoken");

const generateToken = (_id, res) => {
  const JWT_SECRET = process.env.JWT_SECRET || "your_default_jwt_secret_key_change_in_production";
  const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: "7d" });

  res.cookie("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
};

module.exports = generateToken;

const jwt = require("jsonwebtoken");

const generateToken = (userdata) => {
  return jwt.sign({ email: userdata }, process.env.JWT_SECRET, { expiresIn: 300000 });
};

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.header('Authorization'); // Use proper casing

  if (!authorization) return res.status(401).json({ error: "Token not found" });

  const token = authorization.split(" ")[1]; // Corrected the split logic   barrie space jwttokn

  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // Store decoded user info in request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = { generateToken, jwtAuthMiddleware };

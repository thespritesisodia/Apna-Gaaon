// middleware/auth.js
const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded.userId; // Store user ID in the request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = protect;
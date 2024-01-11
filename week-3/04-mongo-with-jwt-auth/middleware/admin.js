// Middleware for handling auth
const jwt = require('jsonwebtoken');
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  try {
    var decoded = jwt.verify(token, 'kengeri');
    req.username = decoded.username;
    next();
  } catch (err) {
    res.send('authentication failed');
  }
}

module.exports = adminMiddleware;

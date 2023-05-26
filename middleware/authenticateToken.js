const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(402).json({
      status: 'error',
      msg: 'Login Terlebih Dahulu',
    });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(404).json({
        status: 'error',
        msg: 'Token Tidak Valid',
      });
    }
    // req.user = user;
    next();
  });
};

module.exports = authenticateToken;

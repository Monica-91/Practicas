const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

/**
 *
 * @param {Number} cla user._id
 * @param {String} email user.email
 * @returns {String}
 */

function generateAccessToken(cla, email) {
  return jwt.sign({ cla, email }, JWT_SECRET, { expiresIn: '1d' });
}

/**
 *
 * @param {String} token
 * @returns {{ cla: Number, email: String }}
 */
function verifyAccessToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  generateAccessToken,
  verifyAccessToken,
};
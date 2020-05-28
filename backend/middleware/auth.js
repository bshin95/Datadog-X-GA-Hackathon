const jwt = require("jsonwebtoken")
const config = require("config")

module.exports = function (req, res, next) {
  //getting token from the header
  const token = req.header("x-auth-token")

  //checking if there is no token. return response
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" })
  }

  //verification of the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"))

    req.user = decoded.user
    next()
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" })
  }
}

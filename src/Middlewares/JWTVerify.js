const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

function verificarJwt(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader) {
    return res.status(403).json({ message: "Header de Auth não encontrado" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (!/^Bearer$/.test(bearer)) {
    return res.status(403).json({ message: "Header de Auth mal formatado" });
  }

  if (!token) {
    return res.status(403).json({ message: "JWT token inexistente" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (usuario, err) => {
    if (err) {
      return res.status(403).json({ message: "JWT token incorreto" });
    }
    req.usuarioId = usuario._id;
    next();
  });
}
module.exports = verificarJwt;

const { Router } = require("express");

const eventsValidator = require("./Validators/eventsValidator");
const eventsController = require("./Controllers/eventsController");

const JWTVerify = require("./Middlewares/JWTVerify");

const rotas = Router();


rotas.post("/eventos", JWTVerify, eventsValidator.create, eventsController.create);

rotas.get("/eventos", JWTVerify, eventsController.read);

rotas.delete("/eventos/:id_usuario", JWTVerify, eventsValidator.destroy, eventsController.delete);

rotas.put(
  "/eventos/:id", JWTVerify, eventsValidator.update, eventsController.update);



module.exports = rotas;

const { Router } = require("express");

const eventsValidator = require("./Validators/eventsValidator");
const eventsController = require("./Controllers/eventsController");

const rotas = Router();


rotas.post("/eventos", eventsValidator.create, eventsController.create);

rotas.get("/eventos", eventsController.read);

rotas.delete("/eventos/:id_usuario", eventsValidator.destroy, eventsController.delete);

rotas.put(
  "/eventos/:id", eventsValidator.update, eventsController.update);



module.exports = rotas;

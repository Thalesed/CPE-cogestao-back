const { Router } = require("express");

const EventsValidator = require("../Validators/EventsValidator");
const EventsController = require("../Controllers/EventsController");

const EventsRoutes = Router();


EventsRoutes.post("/events", EventsValidator.create, EventsController.create);

EventsRoutes.get("/events", EventsController.read);

EventsRoutes.delete("/events/:id", EventsValidator.destroy, EventsController.delete);

EventsRoutes.put(
  "/events/:id", EventsValidator.update, EventsController.update);



module.exports = EventsRoutes;
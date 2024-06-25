const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  img_url: {
    type: String,
  },
  category: {
    type: String,
  },
});

const EventosModel = mongoose.model("events", EventoSchema);

module.exports = EventosModel;

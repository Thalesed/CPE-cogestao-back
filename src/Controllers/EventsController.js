const eventsModel = require("../Models/EventsModel");

class eventsController {
  async create(req, res) {
    try {
      const events = await eventsModel.create(req.body);

      return res.status(200).json(events);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não foi possível criar evento", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const events = await eventsModel.find();
      return res.status(200).json(events);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não foi possível ler eventos", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const eventos = await eventsModel.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json(eventos);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não foi possível atualizar evento", error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      await eventsModel.findByIdAndDelete(id);

      return res.status(200).json({ mensagem: "Eventos deletado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não foi possível deletar usuário", error: error.message });
    }
  }
}

module.exports = new eventsController();

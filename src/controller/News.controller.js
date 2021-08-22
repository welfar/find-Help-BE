const News = require("../models/News.model")

module.exports = {
  async create(req, res) {
    try {
      const { body } = req;
      const news = await News.create(body);
      res.status(201).json(news);
    } catch (error) {
      res.status(400).json("Error creando una nueva noticia");
    }
  },

  async list(req, res) {
    try {
      const news = await News.find();
      res.status(200).json(news);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async destroy(req, res) {
    try {
      const { newsId } = req.body;
      const news = await News.findByIdAndDelete(newsId);
      res.status(200).json(news);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
}
const Foundation = require("../models/Foundations.model");

module.exports = {
  async list(req, res) {
    try {
      const foundations = await Foundation.find({}).select({ password: 0 });
      res.status(200).json(foundations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async show(req, res) {
    try {
      const { foundationsId } = req.params;
      const foundations = await Foundation.findById(foundationsId);
      res.status(200).json(foundations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const { params: {foundationsId}, body } = req;
      const foundation = await Foundation.findByIdAndUpdate(foundationsId, body, { new: true });
      res.status(200).json({ 
        id: foundation.id,
        name: foundation.name,
        email: foundation.email,
        address: foundation.address,
        phone: foundation.phone,
        logo: foundation.profilePicture,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async destroy(req, res) {
    try {
      const { foundationsId } = req.params;
      const foundations = await Foundation.findByIdAndDelete(foundationsId);
      res.status(200).json(foundations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const foundation = await Foundation.create(body);
      res.status(201).json(foundation);
    } catch (error) {
      res.status(400).json({message: error.message});
    }
  },
};

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../models/Admin.model");

module.exports = {
  async show(req, res) {
    try {
      const { adminId } = req;
      const admin = await Admin.findById(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(404).json({ message: "Error en la obtención de los datos" });
    }
  },

  async list(req, res) {
    try {
      const admins = await Admin.find({}).select({ password: 0 });
      res.status(200).json(admins);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async destroy(req, res) {
    try {
      const { adminId } = req.body;
      const admin = await Admin.findByIdAndDelete(adminId);
      res.status(200).json(admin);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const admin = await Admin.create(body);
      res.status(201).json(admin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });

      if (!admin) {
        throw new Error("Contraseña o correo inválidos");
      }
      const isValid = await bcrypt.compare(password, admin.password);
      if (!isValid) {
        throw new Error("Contraseña o correo inválidos");
      }
      const token = jwt.sign({ adminId: admin._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

      res.status(201).json({
        token,
        admin: {
          email: admin.email,
        },
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

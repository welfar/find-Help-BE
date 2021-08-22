const Foundation = require("../models/Foundations.model");

module.exports = {
	async list(req, res) {
		try {
			const foundations = await Foundation.find({});
			res.status(200).json(foundations);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},

	async show(req, res) {
		try {
			const { foundationsId } = req;
			const foundations = await Foundation.findById(foundationsId);
			res.status(200).json(foundations);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},

	async update(req, res) {
		try {
			const { foundationId, name, phone, address } = req.body;
			const foundation = await Foundation.findById(foundationId);
			if (req.body.name !== "") {
				foundation.name = req.body.name;
			}
			if (req.body.phone !== "") {
				foundation.phone = req.body.phone;
			}
			if (req.body.address !== "") {
				foundation.address = req.body.address;
			}
			await foundation.save();
			res.status(200).json(foundation);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	},

	async destroy(req, res) {
		try {
			const { foundationId } = req.body;
			const foundation = await Foundation.findByIdAndDelete(foundationId);
			res.status(200).json(foundation);
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
			res.status(400).json({ message: error.message });
		}
	},
};

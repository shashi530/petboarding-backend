const express = require("express")
const router = express.Router();

const Lists = require("../models/lists.model");

router.post('', async (req, res) => {
	try {
		const lists = await Lists.create(req.body);
		return res.status(201).send(lists);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});


router.get('', async (req, res) => {
	try {
		const lists = await Lists.find().lean().exec();
		return res.send(lists);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 8080;

const connect = require("./config/connect")

const listsSchema = new mongoose.Schema(
    {
        id : {type: Number, required: true, unique: true},
        name : {type: String, require: true},
        city : {type: String},
        address: {type: String},
        capacity: {type: Number},
        cost_per_day: {type: Number},
        verfies: {type: String},
        rating: {type: Number},
    },
    {
        versionKey: false,
		timestamps: true,
    }
);

const Lists = mongoose.model('lists',listsSchema)

app.post('/lists', async (req, res) => {
	try {
		const Lists = await Lists.create(req.body);
		return res.status(201).send(lists);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});



app.get('/lists', async (req, res) => {
	// thennable => proper then
	try {
		const lists = await Lists.find().lean().exec();
		return res.send(lists);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});














app.listen(port, async(req, res) => {
    try{
        await connect();
        console.log("listening", port);
    }
    catch(err){
        console.log(err);
    }
})

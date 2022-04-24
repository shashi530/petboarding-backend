const express = require("express");
const mongoose = require("mongoose");
const app = express()

const listController = require("./controllers/lists.controller")

app.use(express.json());

const port = 8080;
const connect = require("./config/connect")


app.use("/lists",listController)


app.listen(port, async(req, res) => {
    try{
        await connect();
        console.log("listening", port);
    }
    catch(err){
        console.log(err);
    }
})
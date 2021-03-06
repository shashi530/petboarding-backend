
const mongoose = require("mongoose");

const listsSchema = new mongoose.Schema(
    {
        id: {type: Number, required: true, unique:true},
        Name: {type: String, required: true},
        City: {type: String, required: true},
        Address: {type: String, required: true},
        Capacity: {type: Number, required: true},
        Cost_per_day: {type: Number, required: false},
        Verified: {type: String, required: true},
        Rating: {type: Number, required: true},
        Summary: {type: String},
        Types_of_pets: [{type:String}],
        Pet_size: [{type:String}],
        Potty_breaks:{type:Number},
        Walks:{type:Number},
        Toh:{type:String},
        Area_size:{type:String},
        ET:{type:String},
        Image:{type:String, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
      }
);

module.exports = mongoose.model("lists",listsSchema);
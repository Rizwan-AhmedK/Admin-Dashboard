const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    userId: String, 
    field: String, 
    problemStatement: String, 
    latitude: String, 
    longititude: String, 
    ustaadId: String, 
    date: String, 
    email: String, 
    _name: String, 
    phone: Number, 
    address:String
})
mongoose.model("Service", ServiceSchema);
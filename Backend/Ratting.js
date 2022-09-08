const mongoose = require("mongoose");

const RattingSchema = new mongoose.Schema({
    rattingby: String,
    rattingfor: String,
    ratting: Number,
    rattingComment: String
})
mongoose.model("Ratting", RattingSchema);









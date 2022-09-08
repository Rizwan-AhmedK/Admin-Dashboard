const mongoose = require("mongoose");

const AddMoreWorkSchema = new mongoose.Schema({
    workaddedby: String,
    workaddedfor: String,
    workDetails: String,
    workAmount: Number,
})
mongoose.model("AddMoreWork", AddMoreWorkSchema);









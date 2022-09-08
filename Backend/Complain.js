const mongoose = require("mongoose");

const ComplainSchema = new mongoose.Schema({
    complain: String,
    complainby: String,
    complainfor: String,
})
mongoose.model("Complain", ComplainSchema);









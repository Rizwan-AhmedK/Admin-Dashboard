const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    pass: String,
    repass: String,
    role: String,
    phone: Number,
    city: String,
    about: String,
    field: String,
    frontCNIC: String
})
mongoose.model("Users", UserSchema);









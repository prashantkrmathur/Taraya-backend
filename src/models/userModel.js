const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    feedback: {type:String}
},

{
    versionKey: false,
    timestamps: true

});

const userModel = new mongoose.model("user",userSchema);

module.exports = userModel;
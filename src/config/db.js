const mongoose = require("mongoose");

const connect = async () => {
   await mongoose.connect("mongodb+srv://prashantnawa123:Jaimatadi56@cluster0.yrpbecy.mongodb.net/")
}

module.exports = connect;
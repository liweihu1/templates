const mongoose = require("mongoose");

const Basic = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Basic", Basic);

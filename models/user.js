const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  surname: { type: String, required: true, min: 3 },
  password: { type: String, required: true, min: 15 },
  position: { type: String, required: true, min: 5 },
  email: { type: String, required: true, min: 8 },
  id: { type: String, required: true, min: 3 },
});

module.exports = mongoose.model("User", userSchema);
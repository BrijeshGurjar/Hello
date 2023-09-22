const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: String,
  password: String,
  address: String,
});

module.exports = {
  userschema
}

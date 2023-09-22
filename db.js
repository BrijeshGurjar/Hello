const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const { userschema } = require("./model/user");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/capi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });


module.exports = {
  users: mongoose.model("users", userschema),
 
}

var express = require ("express")
var app = express();

let PORT = 3000;

app.use(express.json());
app.use("/user", require('./services/user.services'));


app.listen(PORT , () => console.log(`api run on port ${PORT}`));
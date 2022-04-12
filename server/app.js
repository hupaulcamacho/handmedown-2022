const express = require("express");
const app = express();
require("dotenv");
const PORT = process.env.PORT;

// import controllers
const usersController = require("./controllers/usersController");

// implement controllers
app.use("/users", usersController);

// app listening at port
app.listen(3002, () => {
    console.log("Handmedown server is running at port 3002");
})
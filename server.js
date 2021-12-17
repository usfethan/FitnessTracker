const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//-------
//mongoose connection
mongoose.connect(
    proce.env.MONGODB_URI || "mongodb://localhost/workout", {

        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
});

//--------

//Routes//
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));
//get workouts
//add exercise
//create workout
//get stats


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
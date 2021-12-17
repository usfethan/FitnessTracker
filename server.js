const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//--------

//mongoose connection ???

//--------

//Routes//
//get workouts
//add exercise
//create workout
//get stats


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
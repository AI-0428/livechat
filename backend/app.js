const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require("cors")
const app = express()
app.use(cors());

mongoose.connect(process.env.DB)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Failed to connect to database:", err));

module.exports= app
const cors = require("cors");
const express = require("express");
const mysql = require("mysql2/promise");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = 8000;

const endpointSecret = "xxxx"; // เอาได้จากเว็บของ Stripe

// Middlewares here
app.use(cors());

let conn = null;

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tutorial",
  });
};


// Listen
app.listen(port, async () => {
  await initMySQL();
  console.log("Server started at port 8000");
});
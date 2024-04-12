const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// GET request Device List endpoint
app.get("/api", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbx43anzDHcqbkxp_in_kMxWJviQbxH-pg_cBYYM_SlmVkCrskTc0KEoz5ZytpOVZP7B/exec";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// POST request Device List end point
app.post("/api", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbx43anzDHcqbkxp_in_kMxWJviQbxH-pg_cBYYM_SlmVkCrskTc0KEoz5ZytpOVZP7B/exec";

    const response = await axios.post(url, req.body);
    res.json(response.data);
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Failed to post data" });
  }
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});

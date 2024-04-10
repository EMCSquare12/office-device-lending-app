const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const url =
      "https://script.google.com/a/macros/liveph.com/s/AKfycbwU5dtBwP2VD5OQRaG6QvyxM2_mB4FD2J9OWdyTzmD1Esgp6qiRRc9t7vgoQYLmPyN-/exec";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

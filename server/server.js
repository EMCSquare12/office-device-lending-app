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
      "https://script.google.com/macros/s/AKfycbzznwocUnLkkTVfbYc8VmCF9xz1YxfBnQUuBcFTKTctTi3DyCHwCYiOoJm9hEd_M4iL/exec";
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

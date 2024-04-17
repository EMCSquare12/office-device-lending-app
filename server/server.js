const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// // GET request Device List endpoint
// app.get("/api", async (req, res) => {
//   try {
//     const url =
//       "https://script.google.com/macros/s/AKfycbxK4QJvtlIXRDZVYTMkl1XSDMVu7CuQqDDsN6E7hH6-YuD7Q1zUZ0CtCXjgtW_j1ue-/exec";
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// });

// POST request Lending Records end point
app.post("/api/lending-form", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbws67p1ioBLf9MBFgOXrGM2J8kKcxD2IQaMHF9ja3DGah0qgWKGo_BTfGWJMUJ2cO3p/exec";

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

// POST request Device List end point
app.post("/api/device-list", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbyIK1GHB7IyPM3fXeuQ0x6-uNpgic6PuIYF9O1g09gX4p836E2JFGxjMuODpsHoEvxo/exec";

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

const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// GET request Device List endpoint
app.get("/api/device-list", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbxACbP_-OYBZaN-VScEOrj83xrPfpcXlCrnPglsDSXEUcz3y2IiT9kf0v8mGn_Y_f0z/exec";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// POST request Device List end point
app.post("/api/device-list", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbxACbP_-OYBZaN-VScEOrj83xrPfpcXlCrnPglsDSXEUcz3y2IiT9kf0v8mGn_Y_f0z/exec";

    const response = await axios.post(url, req.body); // Sending the request with req.body as the data
    res.json(response.data);
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Failed to post data" });
  }
});

// GET request Lending List endpoint
app.get("/api/lending-record", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbyi311c9coIE-1llQscOpcKv0xX5eMGRtaKw4pvASxCyRf5KWeCx_Ji3Qs-V1LL-cYR/exec";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// POST request Lending List endpoint
app.post("/api/lending-record", async (req, res) => {
  try {
    const url =
      "https://script.google.com/macros/s/AKfycbyi311c9coIE-1llQscOpcKv0xX5eMGRtaKw4pvASxCyRf5KWeCx_Ji3Qs-V1LL-cYR/exec";

    const response = await axios.post(url, req.body); // Sending the request with req.body as the data
    res.json(response.data);
  } catch (error) {
    console.error("Error posting data:", error);
    res.status(500).json({ error: "Failed to post data" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

import axios from "axios";

const fetchCSVData = async ({ csvUrl, data }) => {
  axios
    .get(csvUrl)
    .then((response) => {
      const parsedCsvData = parseCSV(response.data);
      data(parsedCsvData);
      console.log(parsedCsvData);
    })
    .catch((error) => {
      console.error("Error fetching CSV data:", error);
    });
};

function parseCSV(csvText) {
  const rows = csvText.split(/\r?\n/);
  const headers = rows[0].split(",");
  const data = [];
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(",");
    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

export default fetchCSVData;

//

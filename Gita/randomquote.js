// Process quotes csv
function displayRandomQuote(csvData) {
    var lines = csvData.split("\n");
    // Iterate through each line of the CSV leaving the header
    lines = lines.slice(1, lines.length);
  
    var randomIndex = Math.floor(Math.random() * lines.length);
    var randomQuote = lines[randomIndex].trim();

    console.log(lines.length)

    document.getElementById("quote-text").textContent = randomQuote.split(':')[0];
    document.getElementById("author-name").textContent = '― '+randomQuote.split(':')[2];
    document.getElementById("remark-text").textContent = randomQuote.split(':')[1];
  }

// Read and parse the CSV file
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRXcTCbuNMr-OxZ4XcpyShPkg1AnAu6Ct3C3Umkf5NAPAY8nm5rqXhleyiY5_oIzFZ5YJUT7KnJYSlk/pub?gid=1385646189&single=true&output=csv";
function loadquotesCSV() {
    fetch(GOOGLE_SHEET_URL)
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Error: " + response.status);
      })
      .then(function(csvData) {
        // console.log(csvData)
        displayRandomQuote(csvData);
      })
      .catch(function(error) {
        console.log(error);
      });
}

// Display a random quote when the page loads
loadquotesCSV();
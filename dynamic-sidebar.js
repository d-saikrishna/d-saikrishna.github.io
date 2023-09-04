// Function to process CSV data
function processmenu(csvData) {
    var lines = csvData.split("\n");
    var lists = "";

    // Iterate through each line of the CSV
    lines = lines.slice(1, lines.length);
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();

        if (line != "") {
            var link = line.trim().split(',')[0];
            var description = line.trim().split(',')[1]
            lists += '<li class="sidebar-nav-item"> <a href="' + link + '">' + description + '</a></li>';
    }

    // Set the options in the select box
    document.getElementById("menu").innerHTML = lists;
  }
}

// Read and parse the CSV file
function loadmenuCSV() {
    fetch("https://d-saikrishna.github.io/common/menu.csv")
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Error: " + response.status);
      })
      .then(function(csvData) {
        console.log(csvData)
        processmenu(csvData);
      })
      .catch(function(error) {
        console.log(error);
      });
}


// Process social csv
function process_social(csvData) {
  var lines = csvData.split("\n");
  var lists = "";

  // Iterate through each line of the CSV
  lines = lines.slice(1, lines.length);
  for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();

      if (line != "") {
          var link = line.trim().split(',')[0];
          var icon = line.trim().split(',')[1];
          var socialmedia = line.trim().split(',')[2];
          
          lists += '<li class="sidebar-nav-external"> <img class="externalicon" src="' + icon + '">' + '<a href="'+link+'">' +socialmedia+'</a></li>';
  }

  // Set the options in the select box
  document.getElementById("socialmedia").innerHTML = lists;
}
}
// Read and parse the CSV file
function loadsocialCSV() {
  fetch("https://d-saikrishna.github.io/common/social.csv")
    .then(function(response) {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Error: " + response.status);
    })
    .then(function(csvData) {
      console.log(csvData)
      process_social(csvData);
    })
    .catch(function(error) {
      console.log(error);
    });
}
  
function loadintro(){
fetch('https://d-saikrishna.github.io/common/about-short.txt')
.then(response => response.text())
.then(textContent => {
  // Display the text content in the paragraph element
  console.log(textContent);
  const paragraphElement = document.getElementById('description');
  paragraphElement.innerHTML = textContent;
})
.catch(error => {
  console.error('Error fetching text file:', error);
});
}

function loadname(){
  fetch('https://d-saikrishna.github.io/common/name.txt')
  .then(response => response.text())
  .then(textContent => {
    // Display the text content in the paragraph element
    console.log(textContent);
    const headingElement = document.getElementById('name');
    headingElement.innerHTML = textContent;
  })
  .catch(error => {
    console.error('Error fetching text file:', error);
  });
  }

// Call the loadCSV function to fetch and populate the select box
loadmenuCSV();
loadsocialCSV(); 
loadintro();
loadname();
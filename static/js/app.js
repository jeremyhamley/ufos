// from data.js
var tableData = data;

// check all data
console.log(tableData);

// add var's for SELECT
var tbody = d3.select("tbody");
var clear_button = d3.select("#clear-btn");
var date_form = d3.select("#date_form");
var city_form = d3.select("#city_form");
var state_form = d3.select("#state_form");
var country_form = d3.select("#country_form");
var shape_form = d3.select("#shape_form");


// load the table with all of the sightings data
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Create event handlers 
clear_button.on("click", runClear);
date_form.on("submit", runFilterDate);
city_form.on("submit", runFilterCity);
state_form.on("submit", runFilterState);
country_form.on("submit", runFilterCountry);
shape_form.on("submit", runFilterShape);


// define runClear function
function runClear() {
    d3.event.preventDefault();
    // clear the table
    tbody.html("");
    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


// define runFilterDate function
function runFilterDate() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // filter by date based on input value
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // clear the table
    tbody.html("");

    //populate table with filered data
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}


// define runFilterCity function
function runFilterCity() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#city");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // filter by city based on input value
  var filteredData = tableData.filter(ufo => ufo.city === inputValue);
  console.log(filteredData);

  // clear the table
  tbody.html("");

  //populate table with filered data
  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}


// define runFilterState function
function runFilterState() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // filter by city based on input value
  var filteredData = tableData.filter(ufo => ufo.state === inputValue);
  console.log(filteredData);

  // clear the table
  tbody.html("");

  //populate table with filered data
  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}


// define runFilterCountry function
function runFilterCountry() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#country");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // filter by city based on input value
  var filteredData = tableData.filter(ufo => ufo.country === inputValue);
  console.log(filteredData);

  // clear the table
  tbody.html("");

  //populate table with filered data
  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}


// define runFilterShape function
function runFilterShape() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#shape");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // filter by city based on input value
  var filteredData = tableData.filter(ufo => ufo.shape === inputValue);
  console.log(filteredData);

  // clear the table
  tbody.html("");

  //populate table with filered data
  filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}




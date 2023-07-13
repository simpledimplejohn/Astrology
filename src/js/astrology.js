const { Astrology } = require('astrology-js');




// Define birth date, time, and location
const birthDate = '4/18/1918';
const birthTime = '12:00 PM';
const birthLocation = 'New York';

// Create an instance of the Astrology class
const astrology = new Astrology();

// Calculate the birth chart
const chart = astrology.calculateChart(birthDate, birthTime, birthLocation);

// Access the calculated chart data
console.log(chart);

const request = require('request');
const yargs = require('yargs');

const argv = yargs;

let apiKey = process.env.weather_api;
let city = argv.c || 'philadelphia';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    const weatherDiv = document.getElementsByClassName('weather-container');
    weatherDiv.innerHTML = message;
  }
});


const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'e7630afb6febe284a96dcf5446661c23';
let city = argv.c || 'philadelphia';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    //console.log(message);
    document.getElementById("json")= weather;
  }
});

export class WeatherService{
  getWeatherByCity(city) {
    const Promise = require('es6-promise').Promise;
    return new Promise (function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b726145a6b9e85398db5897c5b0495c8`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

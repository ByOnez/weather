const apikey = "6e887ca436f6731c6354e94495c86a87";

document.addEventListener("DOMContentLoaded", function() {
  let searchCity = document.getElementById("searchCity");
  searchCity.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let city = searchCity.value;
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}`)
        .then(response => response.json())
        .then(data => {
          const kelvin = data.main.temp;
          const celsius = kelvin - 273.15;
          const weather = data.weather[0].main;
          const humidity = data.main.humidity;
          const wind = data.wind.speed;
          const windKmh = wind * 3.6;

          let cityName = document.getElementById("city");
          let temperatureValue = document.getElementById("temperature");
          let weatherDescription = document.getElementById("weather");
          let humidityValue = document.getElementById("humidity");
          let windSpeed = document.getElementById("wind");

          cityName.innerHTML = city.toUpperCase();
          temperatureValue.innerHTML = `${celsius.toFixed(0)}°`;
          weatherDescription.innerHTML = `${weather}`;
          humidityValue.innerHTML = `Humidity ${humidity}%`;
          windSpeed.innerHTML = `Wind ${windKmh.toFixed(0)} Km/h`;

          if(city === "Clouds") {
            
          }
        })
        .catch(error => console.error(error));
    }
  });
});
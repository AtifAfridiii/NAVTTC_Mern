let fetchData = async () => {
  try {

    let cityInput = document.querySelector('#cityInput').value.trim();

    if (!cityInput) {
      alert('Please enter a city name.');
      return;
    }


    let Airline = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=662393f18ba03447c775345703228a12`;


    let Response = await fetch(Airline);


    let data = await Response.json();
    console.log(data);


    let cityName = data.name;
    let temperature = data.main.temp;
    let condition = data.weather[0].description;
    let humidity = data.main.humidity;
    let country = data.sys.country;
    let feelsLike = data.main.feels_like


    let WeatherInfo = document.querySelector('#weatherInfo');
    WeatherInfo.innerHTML = `
      <p><strong>City:</strong> <span >${cityName}</span></p>
      <p><strong>Country:</strong> <span >${country}</span></p>
      <p><strong>Temperature:</strong> <span >${temperature}</span>°C</p>
      <p><strong>Feels like:</strong> <span >${feelsLike}</span>°C</p>
      <p><strong>Condition:</strong> <span >${condition}</span></p>
      <p><strong>Humidity:</strong> <span >${humidity}</span>%</p>
    `;


    WeatherInfo.classList.remove('hidden');
  } catch (error) {
    console.error('Error fetching data:', error);


    let WeatherInfo = document.querySelector('#weatherInfo');
    WeatherInfo.innerHTML = `<p class="text-red-500">Failed to fetch weather data. ${error.message}</p>`;
    WeatherInfo.classList.remove('hidden');
  }
};


let Weather = document.querySelector('#fetchWeatherBtn');
Weather.addEventListener('click', function () {
  let cityInput = document.querySelector('#cityInput');
  fetchData();
  cityInput.value=''
});
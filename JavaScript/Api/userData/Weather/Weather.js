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
    let tableBody = document.querySelector('#tableBody');
    let newRow = document.createElement('tr');

    let City = document.createElement('td');
    let Country = document.createElement('td');;
    let Temperatur = document.createElement('td');

    let Feels = document.createElement('td');
    let Condition = document.createElement('td');;
    let Humidity = document.createElement('td');

    City.className = 'px-4 py-2 border border-black';
    Country.className = 'px-4 py-2 border border-black';
    Temperatur.className = 'px-4 py-2 border border-black';
    Feels.className = 'px-4 py-2 border border-black';
    Condition.className = 'px-4 py-2 border border-black';
    Humidity.className = 'px-4 py-2 border border-black';
    newRow.className='bg-blue-300 text-center border-black'

    let detail = document.querySelector('#detail');

    detail.innerHTML = `
     <h2 class="text-xl font-semibold text-gray-700 text-center mb-4 "> ⛅Weather Details</h2>
    `;


    City.innerHTML= `<p> <span >${cityName}</span></p>`;
    Country.innerHTML=` <p> <span >${country}</span></p>`;
    Temperatur.innerHTML= `<p> <span >${temperature}</span>°C</p>`;
    Feels.innerHTML= `<p> <span >${feelsLike}</span>°C</p>`;
    Condition.innerHTML=`<p> <span >${condition}</span></p>`;
    Humidity.innerHTML= `<p> <span >${humidity}</span>%</p>`;

    newRow.appendChild(City);
    newRow.appendChild(Country);
    newRow.appendChild(Temperatur);
    newRow.appendChild(Feels);
    newRow.appendChild(Condition);
    newRow.appendChild(Humidity);
    tableBody.appendChild(newRow);

    WeatherInfo.classList.remove('hidden');
  } catch (error) {
    console.error('Error fetching data:', error);


    let WeatherInfo = document.querySelector('#weatherInfo');
    WeatherInfo.innerHTML = `<p class="text-red-500">Failed to fetch weather data. ${error.message}</p>`;
    WeatherInfo.classList.remove('hidden');

    // let errorMessage = document.querySelector('#errorMessage');
    // errorMessage.classList.remove('hidden');


  }
};


let Weather = document.querySelector('#fetchWeatherBtn');

Weather.addEventListener('click', function () {
  let cityInput = document.querySelector('#cityInput');
  fetchData();
  cityInput.value=''
});
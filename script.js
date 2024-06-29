const apiKey = "87af1a121e3297dead9090b2f5882f40";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=gorakhpur";
let data;

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    data = await response.json();
    console.log(data);
    document.querySelector('.currentTemp').innerText = Math.round(data.main.temp)  + '°c';
    document.querySelector('.cityName').innerText = data.name;
    document.querySelector('.minTemp').innerText =  Math.round(data.main.temp_min) + '°c';
    document.querySelector('.maxTemp').innerText = Math.round(data.main.temp_max) + '°c';
    document.querySelector('.windSpeed').innerText = Math.round(data.wind.speed) + 'km/h';
}

checkWeather();


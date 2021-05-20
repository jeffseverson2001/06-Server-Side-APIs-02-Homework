
//let displayCity = $('#city');

let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&units=imperial&APPID=326a02beef126b1aa5dec68624560327";
//let weatherZipAPI = "https://api.openweathermap.org/data/2.5/weather?zip=55303,US&units=imperial&appid=326a02beef126b1aa5dec68624560327";
let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=Minneapolis&units=imperial&appid=326a02beef126b1aa5dec68624560327";

console.log(weatherAPI);

//  Fetch City Weather API
function getCityWeather(weatherAPI){
fetch(weatherAPI)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //console.log(data.coord.lon);
        console.log(data.name);
        //console.log(data.weather[0].icon);
    });
}

//  Fetch 5 Day Weather API
function getForcastWeather(weatherForcastAPI){
    fetch(weatherForcastAPI)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //console.log(data.coord.lon);
        console.log(data.name);
        //console.log(data.weather[0].icon);
    });
}

//  Get Local Stored Items
function getLocalItems() {
    let recentCities = localStorage.getItem("recentCities");
    return JSON.parse(recentCities);
}

//  Build Forcast Data from Fetch Call

//  Build City Search Data from Fetch Call

//  Add Elements for top-weather-data

//  Add 5 day forcase elements ????? -- Static elements in HTML page


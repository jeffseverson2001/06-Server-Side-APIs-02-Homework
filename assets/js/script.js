
//let currentDisplayedCity = $('#displayedCity');
//let searchButton = $('#citySearchButton').val();
let searchBox = $('#searchBox').val();

if(searchBox === ""){
    searchBox = "Atlanta";
    seachForCity(searchBox);
}



//console.log("Search Button: " + searchButton);
console.log("Search Box: " + searchBox);

//let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+searchBox+"&units=imperial&APPID=326a02beef126b1aa5dec68624560327";
//let weatherZipAPI = "https://api.openweathermap.org/data/2.5/weather?zip=55303,US&units=imperial&appid=326a02beef126b1aa5dec68624560327";
//let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+searchBox+"&units=imperial&appid=326a02beef126b1aa5dec68624560327";

//console.log(weatherAPI);


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
        console.log(data.city.name);
        //console.log(data.weather[0].icon);
    });
}

//  Get Last Searches from Local Storage
function getLocalItems() {
    let recentCities = localStorage.getItem("recentCities");
    return JSON.parse(recentCities);
}

//  Write Last 8 Searches to Local Storage
function writeLocalItems(lastCitiesSearched){
    prevent.preventDefault();

    //  Add Last Cities Object Here

    console.log(lastCitiesSearched);
    localStorage.setItem("lastCitiesSearched", JSON.stringify(lastCitiesSearched));
}


//  Build 5 Day Forcast Data from Fetch Call

//  Build City Search Data from Fetch Call
function seachForCity(searchCity){

    let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&APPID=326a02beef126b1aa5dec68624560327";
    let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q="+searchCity+"&units=imperial&appid=326a02beef126b1aa5dec68624560327";

    console.log("City Search: " + searchCity);

    getCityWeather(weatherAPI);
    getForcastWeather(weatherForcastAPI);

    //let cityResults = "";

    //return JSON.parse(cityResults);
}

//  Add Elements for top-weather-data
//let currentCity = "";

//  Add 5 day forcase elements ????? -- Static elements in HTML page

//  Build City List for Search Box --- JQuery UI

//  Search Button Listener

$(document).ready(function() {
    $('#citySearchButton').click( function() {
        console.log("Click: " + $('#searchBox').val());
        seachForCity($('#searchBox').val());
    });
});










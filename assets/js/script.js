
//let currentDisplayedCity = $('#displayedCity');
let searchBox = $('#searchBox').val();

console.log("Search Box: " + searchBox);

//let DateTime = luxon.DateTime;
var currentDate = luxon.DateTime.now().toFormat("MM/dd/yyyy");
console.log("Current Date: " + currentDate);

//  Fetch City Weather API
async function getCityWeather(searchCity) {

    let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&APPID=326a02beef126b1aa5dec68624560327";
    
    await fetch(weatherAPI)
        .then(function (response) {
            console.log("Fetch Repsonse: " + response.status);
            return response.json();
        })
        .then(function (data) {
            $(".top-city-weather").html("");
            $("#weather-icon").html("");
            console.log(data);
            //console.log(data.coord.lon);
            console.log(data.name);
            console.log(data.main.temp);
            console.log(data.weather[0].icon);
            
            $(".top-city-weather").append("<img id=\"weather-icon\" src=\"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" alt=\"Weather icon\" /> ");
            $(".top-city-weather").append(
                "<h1>" + data.name + " (" + currentDate + ") </h1>",
                "<div class=\"current-font\">Temp: " + data.main.temp + " &#8457;</div>",
                "<div class=\"current-font\">Wind: " + data.wind.speed + " MPH</div>",
                "<div class=\"current-font\">Humidity: " + data.main.humidity + " %</div>",
                "<div class=\"current-font\">UV Index: " + data.main.temp + "</div>"
            );
            
            //$("#weather-icon").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            
            
        });
}

//  Fetch 5 Day Weather API
async function getForcastWeather(searchCity) {

    let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&appid=326a02beef126b1aa5dec68624560327";

    await fetch(weatherForcastAPI)
        .then(function (response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //console.log(data.coord.lon);
            console.log(data.city.name);
            //console.log(data.weather[0].icon);
            return data;
        });
}

//  Get Last Searches from Local Storage
function getLocalItems() {
    let recentCities = localStorage.getItem("recentCities");
    return JSON.parse(recentCities);
}

//  Write Last 8 Searches to Local Storage
function writeLocalItems(lastCitiesSearched) {
    prevent.preventDefault();

    //  Add Last Cities Object Here

    console.log(lastCitiesSearched);
    localStorage.setItem("lastCitiesSearched", JSON.stringify(lastCitiesSearched));
}


//  Build 5 Day Forcast Data from Fetch Call

//  Build City Search Data from Fetch Call
/*
function seachForCity(searchCity) {

    let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&APPID=326a02beef126b1aa5dec68624560327";
    let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&appid=326a02beef126b1aa5dec68624560327";

    console.log("City Search: " + searchCity);

    let cityWeather = getCityWeather(weatherAPI);
    let cityForcast = getForcastWeather(weatherForcastAPI);

    console.log("Temp: " + cityWeather);
    //currentCityWeather(cityWeather);
}
*/

//  Add Elements for top-weather-data
/*
function currentCityWeather(cityWeather) {
    console.log("CW: " + cityWeather);
    $('.top-city-weather').html(
        "<h1>" + cityWeather.name + " (" + currentDate + ") </h1>",
        "<div class=\"current-font\">Temp: " + cityWeather + "</div>",
        "<div class=\"current-font\">Wind: </div>",
        "<div class=\"current-font\">Humidity: </div>",
        "<div class=\"current-font\">UV Index: </div>"
    );
    //$('.top-city-weather').html("<h2>TEST YOP</h2>");
    //$(".top-city-weather").attr({
    //    "class" : "city-weather-header",
    //});

}
*/

//let currentCity = "";

//  Add 5 day forcase elements ????? -- Static elements in HTML page

//  Build City List for Search Box --- JQuery UI





//  Search Button Listener
$(document).ready(function () {
    $('#citySearchButton').click(function () {
        console.log("Click: " + $('#searchBox').val());
        //seachForCity($('#searchBox').val());
        getCityWeather($('#searchBox').val());
    });
});

if (searchBox === "") {
    searchBox = "Atlanta";
    //seachForCity(searchBox);
}










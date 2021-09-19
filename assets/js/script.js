
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
            console.log(data);
            let unixTime = data.dt;
            let unixDate = new Date(unixTime * 1000).toLocaleDateString("en-US");

            let lon = data.coord.lon;
            let lat = data.coord.lat;

            $(".top-city-weather").html("");
            $("#weather-icon").html("");
            //console.log(data);
            //console.log(data.name);
            //console.log(data.main.temp);
            //console.log(data.weather[0].icon);
            console.log(data.coord.lat);
            console.log(data.coord.lon);

            $(".top-city-weather").append("<h1>" + data.name + " (" + unixDate + ") </h1>");
            $(".top-city-weather").append("<img id=\"weather-icon\" src=\"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" alt=\"Weather icon\" /> ");
            $(".top-city-weather").append(
                "<div class=\"current-font\">Currently:  " + data.weather[0].description + "</div>",
                "<div class=\"current-font\">Temp:  " + data.main.temp + " &#8457;</div>",
                "<div class=\"current-font\">Wind:  " + data.wind.speed + " MPH</div>",
                "<div class=\"current-font\">Humidity:  " + data.main.humidity + " %</div>",
                "<div class=\"current-font\">UV Index:  " + data.main.temp + "</div>"
            );
            getForcastWeather(searchCity, lon, lat);
        });
}


//  Fetch 5 Day Weather API
async function getForcastWeather(searchCity, lon, lat) {

    //let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&cnt=&exclude=hourly,minutely&appid=326a02beef126b1aa5dec68624560327";

    let weatherForcastAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=imperial&appid=326a02beef126b1aa5dec68624560327";

    await fetch(weatherForcastAPI)
        .then(function (response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data) {
            console.log(data.daily);
            let unixTime = data.dt;
            let unixDate = new Date(unixTime * 1000).toLocaleDateString("en-US");

        $(".bottom-city-forcast").html("");
        $("#weather-icon").html("");

        for (let j = 1; j < 6; j++) {
            console.log(data.daily[j]);
            unixTime = data.daily[j].dt;
            unixDate = new Date(unixTime * 1000).toLocaleDateString("en-US");

                $(`<div id=${"forcast-box-" + j} class=\"forcast-box\">`).appendTo(".bottom-city-forcast");
                $(`#forcast-box-${j}`).append("<h2>" + unixDate + "</h2>");
                $(`#forcast-box-${j}`).append("<img id=\"weather-icon\" src=\"https://openweathermap.org/img/w/" + data.daily[j].weather[0].icon + ".png\" alt=\"Weather icon\" /> ");
                $(`#forcast-box-${j}`).append(
                    "<div class=\"forcast-font\">Currently:  " + data.daily[j].weather[0].description + "</div>",
                    "<div class=\"forcast-font\">Temp:  " + data.daily[j].temp.day + " &#8457;</div>",
                    "<div class=\"forcast-font\">Wind:  " + data.daily[j].wind_speed + " MPH</div>",
                    "<div class=\"forcast-font\">Humidity:  " + data.daily[j].humidity + " %</div>"
                );
            }
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




//  Search Button Listener
$(document).ready(function () {
    $('#citySearchButton').click(function () {
        console.log("Click: " + $('#searchBox').val());
        getCityWeather($('#searchBox').val());
        //getForcastWeather($('#searchBox').val());
    });
});


if (searchBox === "") {
    searchBox = "Atlanta";
    getCityWeather(searchBox);
    //getForcastWeather(searchBox);
}




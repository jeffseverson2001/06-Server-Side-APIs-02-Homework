
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

            $(".top-city-weather").append("<h1>" + data.name + " (" + currentDate + ") </h1>");
            $(".top-city-weather").append("<img id=\"weather-icon\" src=\"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png\" alt=\"Weather icon\" /> ");
            $(".top-city-weather").append(
                "<div class=\"current-font\">Currently:  " + data.weather[0].description + "</div>",
                "<div class=\"current-font\">Temp:  " + data.main.temp + " &#8457;</div>",
                "<div class=\"current-font\">Wind:  " + data.wind.speed + " MPH</div>",
                "<div class=\"current-font\">Humidity:  " + data.main.humidity + " %</div>",
                "<div class=\"current-font\">UV Index:  " + data.main.temp + "</div>"
            );
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
            $(".bottom-city-forcast").html("");
            console.log(data);
            //console.log(data.coord.lon);
            console.log(data.city.name);

            let lastDateCheck = "";
            //var forcastObject = {};

            for (i = 0; i < data.list.length; i++) {
                let rawDateCheck = data.list[i].dt_txt;
                let dateCheck = rawDateCheck.substr(0, 10);
                console.log(lastDateCheck + " -- " + dateCheck)
                if (dateCheck !== lastDateCheck) {
                    console.log("HERE" + i);                      
                    $("<div class=\"forcast-box\">").appendTo(".bottom-city-forcast");
                    $(".forcast-box").append("<h2>" + dateCheck + "</h2>");
                    $(".forcast-box").append("<img id=\"weather-icon\" src=\"https://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png\" alt=\"Weather icon\" /> ");
                    $(".forcast-box").append(
                        "<div class=\"forcast-font\">Currently:  " + data.list[i].weather[0].description + "</div>",
                        "<div class=\"forcast-font\">Temp:  " + data.list[i].main.temp + " &#8457;</div>",
                        "<div class=\"forcast-font\">Wind:  " + data.list[i].wind.speed + " MPH</div>",
                        "<div class=\"forcast-font\">Humidity:  " + data.list[i].main.humidity + " %</div>"
                    );
                }
                lastDateCheck = dateCheck;
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
        getForcastWeather($('#searchBox').val());
    });
});


if (searchBox === "") {
    searchBox = "Atlanta";
    getCityWeather(searchBox);
    getForcastWeather(searchBox);
}




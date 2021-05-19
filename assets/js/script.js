
//let displayCity = $('#city');

let weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&APPID=326a02beef126b1aa5dec68624560327";

console.log(weatherAPI);

//  Fetch Weather API
fetch(weatherAPI)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (let i=0; i < data.length; i++){
            console.log(data.length);
            
        }
    });

//  Build Data from Fetch Call

//  Add Elements for top-weather-data

//  Add 5 day forcase elements ????? -- Static elements in HTML page


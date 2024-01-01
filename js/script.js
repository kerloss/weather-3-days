"use strict";
let search = document.getElementById('search');

///////// connect with API and search //////////
async function searchOnCountry(e = 'cairo') {
    try {
        let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2af74893e68541e9977124222232812&q=${e}&days=3`);
        let response = await data.json();
        console.log(response);
        displayDataOfCurrentDay(response);
        displayDataOfSecondDays(response);
        displayDataOfThirdDays(response);
    } catch (error) {
        console.log(error);
    }
    // displayDataOfOtherDays(response.forecast);
};

searchOnCountry('cairo');

////////search using keyup///////////
search.addEventListener('keyup', function (e) {
    // console.log(e.target.value);
    searchOnCountry(e.target.value);
});


///////array for days and months///////
const time = new Date();
const day = time.getDate();
const weekday = time.toLocaleDateString('eng-us', { weekday: 'long' })
const month = time.toLocaleDateString('eng-us', { month: 'long' });
///////////
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/////////////declaration for Id's////////////
const currentDay = document.getElementById('currentDay'),
    currentMonth = document.getElementById('currentMonth'),
    national = document.getElementById('national'),
    city = document.getElementById('city'),
    degree = document.getElementById('degree'),
    imgFirstDay = document.getElementById('imgFirstDay'),
    sunrise = document.getElementById('sunrise'),
    sunset = document.getElementById('sunset'),
    sky = document.getElementById('sky'),
    cloud = document.getElementById('cloud'),
    windKM = document.getElementById('windKM'),
    windDirection = document.getElementById('windDirection');

////////////display function to current day////////////////
const displayDataOfCurrentDay = data => {
    currentDay.innerHTML = weekday;
    currentMonth.innerHTML = (day + month);
    national.innerHTML = data.location.country + ' , ' + data.location.name;
    city.innerHTML = data.location.region;
    degree.innerHTML = data.current.temp_c + '<sup>o</sup>' + 'C';
    imgFirstDay.src = 'https:' + data.current.condition.icon;
    sunrise.innerHTML = 'Sunrise: ' + data.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = 'Sunset: ' + data.forecast.forecastday[0].astro.sunset;
    sky.innerHTML = data.current.condition.text;
    cloud.innerHTML = '<img class="me-2" src="image/icon-umberella.png">' + data.current.cloud + ' %';
    windKM.innerHTML = '<img class="me-2" src="image/icon-wind.png">' + data.current.wind_kph + ' km/h';
    windDirection.innerHTML = '<img class="me-2" src="image/icon-compass.png">' + data.current.wind_dir;
};

/////////////declaration for Id's////////////
const otherDay = document.getElementById('otherDay'),
    otherMonth = document.getElementById('otherMonth'),
    imgOtherDay = document.getElementById('imgOtherDay'),
    maxTemp = document.getElementById('maxTemp'),
    minTemp = document.getElementById('minTemp'),
    skyOther = document.getElementById('skyOther');

/////////display function to other days///////
/*function displayDataOfOtherDays(data) {

    const arrayOfDays = data.forecast.forecastday;
    console.log(arrayOfDays);
    for (let i = 0; i < arrayOfDays.length; i++) {
        // otherDay.innerHTML =  ;
        // otherMonth.innerHTML = time.getDate() + [time.getMonth()];
        imgOtherDay.src = 'https:' + data.forecast.forecastday[i].day.condition.icon;
        maxTemp.innerHTML = '<span class="mb-3">High: </span>' + data.forecast.forecastday[i].day.maxtemp_c + '<sup>o</sup>C';
        minTemp.innerHTML = '<span>Low: </span>' + data.forecast.forecastday[i].day.mintemp_c + '<sup>o</sup>C';
        skyOther.innerHTML = data.forecast.forecastday[i].day.condition.text;
    }
};*/

function displayDataOfSecondDays(data) {
    var day1 = data.forecast.forecastday[1].date
    var t1 = new Date(day1);
    otherDay.innerHTML = days[t1.getDay()];
    otherMonth.innerHTML = t1.getDate() + months[t1.getMonth()];
    imgOtherDay.src = 'https:' + data.forecast.forecastday[1].day.condition.icon;
    maxTemp.innerHTML = '<span class="mb-3">High: </span>' + data.forecast.forecastday[1].day.maxtemp_c + '<sup>o</sup>C';
    minTemp.innerHTML = '<span>Low: </span>' + data.forecast.forecastday[1].day.mintemp_c + '<sup>o</sup>C';
    skyOther.innerHTML = data.forecast.forecastday[1].day.condition.text;
};

////////////////////////////////////
const thirdDay = document.getElementById('thirdDay'),
    thirdMonth = document.getElementById('thirdMonth'),
    imgThirdDay = document.getElementById('imgThirdDay'),
    maxTemp2 = document.getElementById('maxTemp2'),
    minTemp2 = document.getElementById('minTemp2'),
    skyOther2 = document.getElementById('skyOther2');

function displayDataOfThirdDays(data) {
    var day2 = data.forecast.forecastday[2].date
    var t2 = new Date(day2);
    thirdDay.innerHTML = days[t2.getDay()];
    thirdMonth.innerHTML = t2.getDate() + months[t2.getMonth()];
    imgThirdDay.src = 'https:' + data.forecast.forecastday[2].day.condition.icon;
    maxTemp2.innerHTML = '<span class="mb-3">High: </span>' + data.forecast.forecastday[2].day.maxtemp_c + '<sup>o</sup>C';
    minTemp2.innerHTML = '<span>Low: </span>' + data.forecast.forecastday[2].day.mintemp_c + '<sup>o</sup>C';
    skyOther2.innerHTML = data.forecast.forecastday[2].day.condition.text;
}
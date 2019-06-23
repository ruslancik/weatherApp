const weather = new Weather('baku');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){

    weather.getWeather()
    .then(result=> console.log(result))
    .catch( error => console.log('Error: ' + error));

}





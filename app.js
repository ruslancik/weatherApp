const weather = new Weather('baku');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){

    weather.getWeather()
    .then(result=> {
        ui.paint(result)})
    .catch( error => console.log('Error: ' + error));

}





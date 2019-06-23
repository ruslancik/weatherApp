const weather = new Weather('baku');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', function(e){

    const city = document.getElementById('city').value;

    weather.changeLoc(city);

    getWeather();

    $('#locModal').modal('hide');
})

function getWeather(){

    weather.getWeather()
    .then(result=> {
        ui.paint(result)})
    .catch( error => console.log('Error: ' + error));

}






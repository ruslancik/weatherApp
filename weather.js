class Weather {
    constructor(city){
        this.apiKey = '44e6bab843796108093fbda3a0d3b4d7';
        this.city = city;
    }

    async getWeather(){

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}
        &appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;

    }

    changeLoc(cityName){
        this.city = cityName;
    }
}
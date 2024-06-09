class Weather {

    constructor(city) {
        this.apiKey = '38cfb7d231634d7689c152306202903'
        this.city = city;
    }
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city) {
        this.city = city;
    }
}
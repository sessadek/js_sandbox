class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.location.name}, ${weather.location.country}`;

        this.description.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_f} F (${weather.current.temp_c} C)`;
        this.icon.setAttribute('src', weather.current.condition.icon);

        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
        this.dewpoint.textContent = `pressure : ${weather.current.pressure_mb}mb, ${weather.current.pressure_in} in`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c} F (${weather.current.feelslike_f} C)`;
        this.wind.textContent = `Wind :  ${weather.current.wind_mph}mph, ${weather.current.wind_kph}kph, ${weather.current.wind_degree}degree`;
    }
}
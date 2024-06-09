class UI {
    constructor() {
        this.weather = document.getElementById('weather');
    }

    displayWeather(data) {
        console.log(data)
        this.weather.innerHTML = `
            <h3>${data.location.country}, ${data.location.name}</h3>
            <h4>${data.current.condition.text}</h4>
            <div><img src="${data.current.condition.icon}"></div>
        `;
    }

    clear() {
        this.weather.innerHTML = '';
    }

}
let city = (localStorage.getItem('city') === null) ? 'Rabat' : localStorage.getItem('city');
const weather = new Weather(city);
const ui = new UI;

getWeather();

document.getElementById('btn').addEventListener('click', () => {
    const inputText = document.getElementById('city').value;
    if(inputText !== '') {
        weather.changeLocation(inputText);
        localStorage.setItem('city', inputText);
        getWeather();
    } else {
        ui.clear();
    }
});

function getWeather() {
    weather.getWeather().then(data => {
        ui.displayWeather(data);
    }).catch(err => {
        console.log(err);
    });
}


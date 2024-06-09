// Initialise Storage

const storage = new Storage();

const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);
// weather.changeLocation('Marrakech');

const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  $('#locModal').modal('hide');
});

// weather.changeLocation('Miami', 'FL');

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
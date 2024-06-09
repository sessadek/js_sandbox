// class Weather {
//   constructor(city, state) {
//     this.apiKey = '99dfe35fcb7de1ee';
//     this.city = city;
//     this.state = state;
//   }

//   // Fetch weather from API
//   async getWeather() {
//     const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

//     const responseData = await response.json();

//     return responseData.current_observation;
//   }

//   // Change weather location
//   changeLocation(city, state) {
//     this.city = city;
//     this.state = state;
//   }
// }

class Weather {
  constructor(city) {
    this.apiKey = '38cfb7d231634d7689c152306202903';
    this.city = city;
    // this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    // this.state = state;
  }
}
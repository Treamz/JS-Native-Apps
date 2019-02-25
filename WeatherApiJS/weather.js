const API_KEY = '64e799bda0864985904a855811463b12';
const CITY = 'London';
const UNITS = 'metric';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  class Weather {

    constructor() {
     this.city = document.querySelector('.cityName');
     this.temp =  document.querySelector('.bottom__right');
     this.sky =  document.querySelector('.app__right > .skyTop');
     this.skyBottom =  document.querySelector('.app__right > .skyBottom');
     this.weatherIcon = document.querySelector('.weather_icon');
     this.wind = document.querySelector('.wind');
     this.sunrise = document.querySelector('.sunrise');
     this.sunset = document.querySelector('.sunset');
     this.date = document.querySelector('.date');
     this.time = document.querySelector('.time');
    }
    getWeather() {
      let data = null;
      // Make a request for a user with a given ID
      axios.get('http://api.openweathermap.org/data/2.5/weather', 
        {
          params: {
            q: CITY,
            appid: API_KEY,
            units: UNITS
          }
        }
      )
      .then(function (response) {
        // handle success
        
          data = response.data;
          this.setWeather(data);
        }.bind(this))
        .catch(function (error) {
          // handle error
          console.log(error);
      })
    }
    setWeather(data) {
      console.log(data);
      this.city.innerHTML = data.name;
      this.temp.innerHTML = Math.floor(data.main.temp) + '°';
      this.sky.innerHTML = data.weather[0].main;
      this.appendIcon(data.weather[0].icon);
      this.skyBottom.innerHTML = data.weather[0].description;
      this.wind.innerHTML = `Wind: ${data.wind.speed} m/sec`;
      this.sunrise.innerHTML =  `Sunrise: ${this.getSun(data.sys.sunrise)}`;
      this.sunset.innerHTML =  `Sunrise: ${this.getSun(data.sys.sunset)}`;
      setInterval(() => {
        this.timer();
       },1000)
    }
    appendIcon(icon) {
      let img = document.createElement('img');
      img.src = `http://openweathermap.org/img/w/${icon}.png`;
      this.sky.appendChild(img);
    }
    timer() {
      let date = new Date();
      this.date.innerHTML = `${date.getUTCDate()} ${monthNames[date.getUTCMonth()]}`;
      
      this.time.innerHTML = `${date.getUTCHours()}:${this.min(date.getUTCMinutes())}`;
      
    }
    getSun(srtime) {
      let date = new Date(srtime * 1000); // indeed seconds
      return date.getUTCHours() + ":" + this.min(date.getUTCMinutes());
    }
    min = (min) =>  {
      return min < 10 ? '0'+ min : min
    }
  }

  let weather = new Weather();
  weather.getWeather();
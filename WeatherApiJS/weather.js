

// Make a request for a user with a given ID
axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=64e799bda0864985904a855811463b12')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
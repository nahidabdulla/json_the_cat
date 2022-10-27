const fetchBreedDescription = function(breed, callback) {
  const request = require('request');
  request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {

    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    const result = data.find(element => element.name.toLowerCase() === breed.toLowerCase());
    // const description = result.description;

    if (result) {
      const description = result.description;
      return callback(null, description);
    } else {
      return callback(`Sorry, we don't have any information on ${breed}'s!`, null);
    }

  });
};


module.exports = { fetchBreedDescription };
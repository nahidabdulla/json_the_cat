const breed = process.argv.slice(2)[0];


const request = require('request');
request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {

  if (error) {
    console.log('error :', error);
    return;
  }

  const data = JSON.parse(body);
  const result = data.find(element => element.name === breed);

  if (result) {
    console.log(result.description);
  } else {
    console.log(`Sorry, we don't have any information on ${breed}'s!`);
  }

});
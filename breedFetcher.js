const request = require('request');
const apiEndpoint = 'https://api.thecatapi.com/v1/breeds/search';

request(apiEndpoint, (error, response, body) => {
  if (error) {
    // Handle request errors
    console.error('Request failed:', error);
  } else {
    // Parse the response body
    const data = JSON.parse(body);

    // Access and display breed information
    const breedName = process.argv[2]; // Read the breed name from command-line arguments
    const breedInfo = data[0]; // Assuming the first entry is the relevant one

    if (breedInfo) {
      console.log(`${breedName}: ${breedInfo.description}`);
    } else {
      console.log(`${breedName} not found.`);
    }
  }
});


const request = require('request');

request('https://www.google.com/search?q=flower+images&oq=flower&aqs=chrome.1.69i57j0l6j46.5265j0j7&sourceid=chrome&ie=UTF-8', function(err, res, body) {
    console.log(body);
});
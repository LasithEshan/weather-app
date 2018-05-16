const request = require('request'); //http request

request({ //request(object, callback)
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=no%207%201st%20cross%20street%20walpola%20matara%20sri%20lanka&key=AIzaSyA-S7iQtSY1nyhTK8Mp9ja5lfgsgxcUFN0',
    json: true
}, (error, response, body)=>{

    console.log(JSON.stringify(body, undefined, 2));

});

console.log('synchro');


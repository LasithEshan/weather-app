var request = require('request');

var getWeather = (lat,lng, callback)=>{
    request({
        url:`https://api.darksky.net/forecast/d6f20ccf041b865f413fea1e602d9bdf/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
    
        if(!error && response.statusCode === 200){
            callback(undefined, {
               temp : body.currently.temperature,
               sum : body.currently.summary
            })
        }else{
            callback('Couldnt read weather');
        }
    });


}



module.exports = {
    getWeather
}
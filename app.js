const request = require('request'); //http request

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

var argv = yargs
    .options({
        a : {
            demand      : true,
            alias       : 'address',
            describe    : 'enter your location address',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;

debugger;
geocode.geocodeAddress(argv.address,(errorMessage, results)=>{

    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});

console.log('synchro');

request({
    url:`https://api.darksky.net/forecast/d6f20ccf041b865f413fea1e602d9bdf/5.954346699999999,80.5479982`,
    json: true
}, (error, response, body)=>{

    if(!error && response.statusCode === 200){
    console.log(`Temperature : ${body.currently.temperature}F`);
    }else{
        console.log('couldnt read weather');
    }
});
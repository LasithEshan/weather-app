const request = require('request'); //http request

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const weather = require('./weather/weather.js');

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
        // console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude, results.longitude, (errorMessage, wresults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`Temperature : ${wresults.temp}F`);
                console.log(`Summary : ${wresults.sum}`);
                
            }
       
        });
       
       
    }
});



 
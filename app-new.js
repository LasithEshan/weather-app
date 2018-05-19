const axios = require('axios');

const yargs = require('yargs');



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
var encodedAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA-S7iQtSY1nyhTK8Mp9ja5lfgsgxcUFN0`;

axios.get(geocodeURL).then((response) => {
    
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to fetch the address');
    }
    var lati, lngi,weather;
    lati    = response.data.results[0].geometry.location.lat;
    lngi    = response.data.results[0].geometry.location.lng;
    weather = `https://api.darksky.net/forecast/d6f20ccf041b865f413fea1e602d9bdf/${lati},${lngi}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weather);
    

}).then((response) => {
    var tmp = response.data.currently.temperature;
    var sum = response.data.currently.summary;

    console.log(`Temperature : ${tmp}`);
    console.log(`Summary     : ${sum}`);
    
    

}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        
        console.log('unable to connect to servers');
        
    }else{
        console.log(e.message);
    }
    // console.log(e);
});
 
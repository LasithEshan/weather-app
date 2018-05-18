const request = require('request'); //http request

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
    console.log(encodedAddress);

request({ //request(object, callback)
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA-S7iQtSY1nyhTK8Mp9ja5lfgsgxcUFN0`,
    json: true
}, (error, response, body)=>{

    if(error){
        console.log('Unable to connect to Server');
    }else if(body.status === 'ZERO_RESULTS'){
        console.log('Address not found');
    }else if(body.status === 'OK'){

        console.log(`Address   : ${body.results[0].formatted_address}`);
        console.log(`Latitude  : ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
       
    }

    // console.log(JSON.stringify(response, undefined, 2));
    

});

console.log('synchro');


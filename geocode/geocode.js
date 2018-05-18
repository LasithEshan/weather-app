const request = require('request'); //http request


var geocodeAddress = (argv, callback)=>{
    var encodedAddress = encodeURIComponent(argv);
    console.log(encodedAddress);



    request({ //request(object, callback)
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA-S7iQtSY1nyhTK8Mp9ja5lfgsgxcUFN0`,
        json: true
    }, (error, response, body)=>{

        if(error){
            callback('Unable to connect to Server');

        }else if(body.status === 'ZERO_RESULTS'){
            callback('Address not found');

        }else if(body.status === 'OK'){ 
            callback(undefined,{
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
        
            } );
        
        }

        // console.log(JSON.stringify(response, undefined, 2));
        

    });
}

module.exports = {
    geocodeAddress
};
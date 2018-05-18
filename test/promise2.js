var request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{

    var encodedAddress = encodeURIComponent(address);
    console.log(encodedAddress);



    request({ //request(object, callback)
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA-S7iQtSY1nyhTK8Mp9ja5lfgsgxcUFN0`,
        json: true
    }, (error, response, body)=>{

        if(error){
            reject('Unable to connect to Server');

        }else if(body.status === 'ZERO_RESULTS'){
            reject('Address not found');

        }else if(body.status === 'OK'){ 
            resolve({
                address : body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
        
            } );
        
        }

        // console.log(JSON.stringify(response, undefined, 2));
        

    });
    });
};



geocodeAddress('gfdsfasf').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2))
},(errorMessage)=>{
    console.log(errorMessage);
});
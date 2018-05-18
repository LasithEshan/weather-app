var promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('Its working');
        reject('Couldnt make it work');

    }, 3000);
});

promise.then((message)=>{
    console.log('Success : ',message);
}, (errorMessage)=>{
    console.log('Error :', errorMessage);
});
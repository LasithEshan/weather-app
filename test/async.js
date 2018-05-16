console.log('first');

setTimeout(()=>{
    console.log('async call back 2000');
}, 2000);

setTimeout(()=>{
    console.log('async call back 0');
}, 0);

console.log('last');
var getUser = (id, callback)=>{

    var user = {
        id: id,
        name: 'Thor'
    };

    setTimeout(()=>{
        callback(user);

    }, 3000);
}

getUser(15, (user)=>{
    console.log(user);
});
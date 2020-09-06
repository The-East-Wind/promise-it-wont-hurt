const firstPromise = first();
firstPromise.then((data)=>{
    return second(data);
})
.then((data)=>{
    console.log(data);
});
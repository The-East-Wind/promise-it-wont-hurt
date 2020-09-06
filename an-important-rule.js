function alwaysThrows(){
    throw new Error("OH NOES");
}
function iterate(i){
    console.log(i);
    return i+1;
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then((data)=>{
    alwaysThrows();
    return iterate(data);
})
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(error=>console.error(error.message));
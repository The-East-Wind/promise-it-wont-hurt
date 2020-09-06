var promise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('FULFILLED!');
    },300);
});
promise.then((data)=>{
    console.log(data);
});
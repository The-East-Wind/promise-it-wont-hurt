var promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'));
    },300);
});
promise.then(
    (data)=>{
    console.log(data);
    },
    (error)=>{
        console.log(error.message); 
    }
);

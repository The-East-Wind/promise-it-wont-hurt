function all(promise1,promise2){
    var promise = new Promise((resolve,reject)=>{
        var counter = 0;
        var array = [];
        promise1.then((data)=>{
            counter++;
            array[0] = data;
            if(counter==2){
                resolve(array);
            }
        });
        promise2.then((data)=>{
            counter++;
            array[1] = data;
            if(counter==2){
                resolve(array);
            }
        });
    });
    return promise;
}
all(getPromise1(),getPromise2())
.then(console.log);
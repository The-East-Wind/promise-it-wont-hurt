function parsePromised(){
    var promise = new Promise((resolve,reject)=>{
        try{
            var json = JSON.parse(process.argv[2]);
            resolve(json);
        }
        catch(e){
            reject(e);
        }
    });
    return promise;
}
parsePromised().then(console.log,(error)=>{
    console.log(error.message);
});
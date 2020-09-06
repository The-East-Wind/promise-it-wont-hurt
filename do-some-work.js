const http = require('http');
function read(url){
    return new Promise((resolve,reject)=>{
        http.get(url,(res)=>{
            res.setEncoding('utf-8');
            let body = '';
            res.on('data',data=>{
                body+=data;
            });
            res.on('error',err=>{
                reject(err);
            })
            res.on('end',()=>{
                resolve(body);
            })
        });
    });
}
read('http://localhost:7000')
.then(data=>{
    return read(`http://localhost:7001/${data}`);
})
.then(data=>{
    console.log(JSON.parse(data));
})
.catch(err=>{
    console.log(err.message);
});
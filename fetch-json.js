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
                resolve(JSON.parse(body));
            })
        });
    });
}

read('http://localhost:1337')
.then(console.log)
.catch(err=>{
    console.error(err.message);
});
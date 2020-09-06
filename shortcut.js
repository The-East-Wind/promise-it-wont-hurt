var resolvedPromise = Promise.resolve('SECRET VALUE');
var rejectedPromise = Promise.reject(new Error('SECRET VALUE'));
resolvedPromise.then(console.log);
rejectedPromise.catch((error)=>{
    console.error(error.message);
});
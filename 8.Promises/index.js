function delayfn(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}
console.log("Promises");
delayfn(2000).then(()=>console.log('after 2 sec promise resolved '));
console.log('end');


function divide(a,b){
    return new Promise((resolve,reject)=>{
        if(b===0){
            reject('cannot divide from zero ');
        }
        else{
            resolve(a/b);
        }
    })

}
divide(10,0)
    .then(result=> console.log(result,'result '))
    .catch(error=>console.log(error,'error'));
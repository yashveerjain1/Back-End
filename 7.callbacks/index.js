const fs=require('fs');


function person (name,callbackfn){
    console.log(`Hello ${name}`);
    callbackfn();
    console.log(`Node js`);
    
    
}

function adress(){
    console.log(`India`);
    
}

person('Yash',adress)

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.log("error");
        
    }
    console.log(data);
    
})
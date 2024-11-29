function delay(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}

async function delaygreet(name) {
await delay(2000);
    console.log(name);
    
    
}

delaygreet('Yash Bhaiya divide suffle hua ');


async function divide(a,b) {
    try {
        if(b===0)
            throw new Error('can not divide by zero')
        return a/b;
    } catch (error) {
        console.error('error',error);
        return null;
        
    }
    
}
async function main(){
console.log(await divide(10,0));
console.log(await divide(10,2));

}
main()
//this is a root file nd we are importing other files


const firstModule=require('./first-Module');

console.log(firstModule.add(10,20));
console.log((firstModule.subtraction(20,10)));


try {
    console.log('trying to divide by zero ');
    let result=firstModule.divide(10,0);
    console.log(result);
    
    
} catch (error) {
    console.log("Caught an eroor",error.message);
    
}


// // ? module wrapper
// {
//     function(exports,require,module,__filename__directory name){
//         // your modeule code will be their
//     }
// }
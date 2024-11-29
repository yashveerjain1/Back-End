function add(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function divide(a,b){
    if(b==0){
        throw new Error('Divide by zero is allowed');
    }
    return a/b;
}

module.exports={
    add,subtraction,divide,
}
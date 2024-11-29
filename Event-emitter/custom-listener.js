const EventEmitter=require('events');

class customemitter extends EventEmitter{
    constructor(){
        super();
        this.greeting="hello"
    }
    greet(name){
        this.emit('greeting',`${this.greeting},${name}`)
    }
}


const mycustomemitter=new customemitter();

mycustomemitter.on('greeting',(input)=>{
    console.log('Greeting event',input);
    
})

mycustomemitter.greet('Yash');
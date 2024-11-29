const EventEmitter=require('events');


const myfirstemitter=new EventEmitter();

myfirstemitter.on('greet',(name)=>{
    console.log(`hello ${name}`);
    
})

myfirstemitter.emit("greet","Yash");

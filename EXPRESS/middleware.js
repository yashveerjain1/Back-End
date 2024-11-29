const express=require('express')

const app=express();

// define middleware

const myfirstmiddleware=(req,res,next)=>{
    console.log('This First Middle ware will run on every request ');
    next();
};


app.use(myfirstmiddleware);

app.get('/',(req,res)=>{
    res.send('home page');
})
app.get('/about',(req,res)=>{
    res.send('about page');
})

const port=3000;

app.listen(port,()=>{
    console.log(`App is runnig on ${port}`);
    
})
const express=require('express')

const app=express();

// define middleware
const requestTimestampLogger=(req,res,next)=>{
    const timeStamp=new Date().toISOString();

    console.log(` ${timeStamp} from ${req.method} to ${req.url}`);
    next();
    }

app.use(requestTimestampLogger);

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
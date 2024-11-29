const fs=require('fs');

fs.exists('fsread.js',(data)=>{
    
    console.log("Checking the file", data ? true:false);
    
})

// fs.exists jo mthod hai wo decrepted ho chuka hai uski jagah pr fs.access method use krna chahiye 


fs.access('fsread.js', fs.constants.F_OK,(err)=>{
    console.log("Accesss Method Is used : " , err ? 'not found':'found');
    
})

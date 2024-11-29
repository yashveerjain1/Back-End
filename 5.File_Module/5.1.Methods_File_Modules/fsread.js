const fs= require('fs');

fs.readFile("input.txt","utf-8",(err,data)=>{
    if(err){
        console.log('Cannot Able to read the file');
        
    }
    console.log("File Readed Successfull",data );
    
})



// fs.readfile method hai aapka yha pr  file_name , encoding , callbacks

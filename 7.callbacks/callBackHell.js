const fs=require('fs');

fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        console.log("Error");
        
    }
    const modifyFileData=data.toUpperCase();

    fs.writeFile('output.txt',modifyFileData,(err)=>{
        if(err){
            console.log("error1");
            return;
            
        }
        console.log("Data witten ");

        fs.readFile("output.txt",'utf8',(err,data)=>{
            if(err){
                throw new Error ('Error')
            }
            console.log(data);
            
        })
        
    })
})
const mongoose= require('mongoose');


// connecting through the mongodb Atlas
// !                                userName   : Password    
mongoose.connect("mongodb+srv://yashjain0112233:          @basics-of-mongodb.zyiwk.mongodb.net/",{
    serverSelectionTimeoutMS: 5000
})
.then(()=>{console.log(`Data Base connected`)})
.catch((e)=>console.log(e));

// ?  Defining the Schema for the Database
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActice:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
});


// Creating Model For the Database
const User=mongoose.model('User',userschema);

async function runQuery() {
    try {
        // create a new document 
        const newUser=await User.create({
            name:'utkarsh rawat singh',
            email:'urs@gmail.com',
            age:21,
            isActice:false,
            tags:['mastery','Mongoose','basics'],
        })

        console.log('Created New user',newUser);
        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        await mongoose.connection.close();//method to close the connection 
    }
    
}
runQuery();

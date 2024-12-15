const mongoose= require('mongoose');
// connecting through the mongodb Atlas
// !                                userName   : Password    
mongoose.connect("mongodb+srv://yashjain0112233:@basics-of-mongodb.zyiwk.mongodb.net/",{
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
        // !create a new document 
        const newUser=await User.create({
            name:'Updated User ',
            email:'Updateduser@gmail.com',
            age:29,
            isActice:false,
            tags:['err ','90','chroma'],
        })
        console.log('Created New user',newUser);

        // !get all user 
        // const allUser=await User.find({});
        // console.log(allUser);   
        
        // !get user by specific Field
        // const UserValue=await User.find({name:"yash veer jain"})
        // console.log(UserValue);
        
        // ! using FindOne Method
        // const FindLakshayRawat=await User.findOne({name:"Lakshay rawat"});
        // console.log(FIndLakshayRawat);
        
        // !using find By Id method 
        // const lastUser=await User.findById(newUser._id)
        // console.log(lastUser);

        // !selectfield from the user to get 
        // const selectedField=await User.find().select('name email age -_id');
        // console.log(selectedField);
        
        // !limited user get
        // const limitedUser=await User.find().select('name -_id').limit(5).skip(1);
        // console.log(limitedUser);
        
        // !using sort function
        // const sortUserByAge=await User.find().sort({age:-1}).select('name age -_id');
        // console.log(sortUserByAge);
        
        // !Count the documeb=nts
        // const CountDocument=await User.countDocuments({isActice:true});
        // console.log(CountDocument);


        // !Delete the last user 
        // const deleteuser=await User.findByIdAndDelete(newUser._id);
        // console.log(deleteuser);

        //! update User 
        // const updateUser=await User.findByIdAndUpdate(newUser._id,{
        //     $set: {age:100},
        //     $push:{tags:'Hello'}
        // },
        // {new:true});
        // console.log(`Updated User ->${updateUser}`);
        

        
    } catch (error) {
        console.log(error);
        
    }
    finally{
        await mongoose.connection.close(); 
    }
    
}
runQuery();

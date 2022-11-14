const mongoose =require('mongoose')
const userSchema=mongoose.Schema({
name:{
    required:[true, 'Please add a name'],
    type:String
},
email:{
    required:[true, 'Please add an email'],
    type:String
},
password:{
    required:[true, 'Please add a password'],
    type:String
}
},
{timestamps:true}
)
module.exports=mongoose.model('Users',userSchema)
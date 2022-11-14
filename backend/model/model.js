const mongoose=require('mongoose')
const goalSchema=mongoose.Schema(
    {user:{
        type:mongoose.Schema.Types.ObjectId,
        requires:true,
        ref:'User'
    },
        text:{
            type:String,
            required:true
        }
    },
    {  
     timestamps:true
    }
)
module.exports=mongoose.model('Goal',goalSchema)
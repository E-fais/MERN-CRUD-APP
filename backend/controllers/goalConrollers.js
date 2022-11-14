const asyncHandler=require('express-async-handler')
const Goals=require('../model/model')
const User=require('../model/users')

const getGoals=asyncHandler( async (req,res)=>{
    const goal= await Goals.find({user:req.user.id})
    res.status(200).json(goal)
})

const updateGoal=asyncHandler( async (req,res)=>{
    const goal=await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const user=await User.findById(req.user.id)
    //check for user

    if(!req.user){
        res.status(401)
        throw new Error('User not found!')
    }
    if(req.user.id!==goal.user.toStringify()){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedGoal=await Goals.findByIdAndUpdate(req.params.id,req.body,
        {new:true})
    res.status(200).json(updatedGoal)
})
const postGoal=asyncHandler( async (req,res)=>{
   if(!req.body.text){
    res.status(400)
    throw new Error('please add text');
   }
   const goals=await Goals.create(
    {
        text:req.body.text,
        user:req.user.id
    }
   )
    res.status(200).json(goals)
})
const deleteGoal=asyncHandler( async (req,res)=>{
    const goal=await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error
    }

    const user=await User.findById(req.user.id)
    //check for user

    if(!req.user){
        res.status(401)
        throw new Error('User not found!')
    }
    if(goal.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

 await goal.remove()
    res.status(200).json(req.params.id)
})
module.exports={
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
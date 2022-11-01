const asyncHandler=require('express-async-handler')

const getGoals=asyncHandler( async (req,res)=>{
    res.status(200).json({message:'goals from controllers'})
})

const updateGoal=asyncHandler( async (req,res)=>{
    res.status(200).json({message:`update from controller ${req.params.id}`})
})
const postGoal=asyncHandler( async (req,res)=>{
   if(!req.body.text){
    res.status(400)
    throw new Error('please add text');
   }
    res.status(200).json({message:'create a new goal'})
})
const deleteGoal=asyncHandler( async (req,res)=>{
    res.status(200).json({
        message:`delete goals ${req.params.id}`
    })
})
module.exports={
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
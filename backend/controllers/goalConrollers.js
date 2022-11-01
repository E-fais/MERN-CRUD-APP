const asyncHandler=require('express-async-handler')
const Goals=require('../model/model')

const getGoals=asyncHandler( async (req,res)=>{
    const goal= await Goals.find()
    res.status(200).json(goal)
})

const updateGoal=asyncHandler( async (req,res)=>{
    const goal=await Goals.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
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
        text:req.body.text
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
 await goal.remove()
    res.status(200).json(req.params.id)
})
module.exports={
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
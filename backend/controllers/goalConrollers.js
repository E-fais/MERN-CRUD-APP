const getGoals= (req,res)=>{
    res.status(200).json({message:'goals from controllers'})
}
const updateGoal=(req,res)=>{
    res.status(200).json({message:`update from controller ${req.params.id}`})
}
const postGoal=(req,res)=>{
    res.status(200).json({message:'create a new goal'})
}
const deleteGoal=(req,res)=>{
    res.status(200).json({
        message:`delete goals ${req.params.id}`
    })
}
module.exports={
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
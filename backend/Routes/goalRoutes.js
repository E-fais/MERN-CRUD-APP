const express =require('express')
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controllers/goalConrollers')
const router= express.Router()

// router.get('/', getGoals)
// router.post('/',postGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)

// clean the code
router.route('/').get(getGoals).post(postGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)
module.exports=router
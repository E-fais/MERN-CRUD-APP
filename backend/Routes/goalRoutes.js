const express =require('express')
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controllers/goalConrollers')
const {protect}=require('../middleWares/authMiddleware')
const router= express.Router()


// router.get('/', getGoals)
// router.post('/',postGoal)
// router.put('/:id',updateGoal)
// router.delete('/:id',deleteGoal)

// clean the code
router.route('/').get(protect,getGoals).post(protect,postGoal)
router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal)
module.exports=router
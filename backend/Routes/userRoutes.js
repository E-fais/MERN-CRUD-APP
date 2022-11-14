const express=require('express')
const router=express.Router()

const {registerUser, loginUser, getUser} = require('../controllers/userController')
const {protect}=require('../middleWares/authMiddleware')
router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getUser)

module.exports=router 
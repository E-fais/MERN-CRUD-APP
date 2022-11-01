const express =require ('express')
const colors=require('colors')
const {errorHandler}=require('./middleWares/middleWare')
const connectDB=require('./MongoDB/config')
const  dotenv=require('dotenv').config()
const port =process.env.PORT ||8000

const app= express()
app.use(express.json())
connectDB()
app.use(errorHandler)
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./Routes/goalRoutes'))
app.listen(port,console.log('server connected'))
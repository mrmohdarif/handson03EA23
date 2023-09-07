const express=require('express')
const routers=require('./router/router')
const app=express()
app.use(express.json())
app.use(routers)
app.listen(5000,()=>{
    console.log("you are runnign on port 500");
})
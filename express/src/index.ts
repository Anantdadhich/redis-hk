import express from "express"
import {createClient} from "redis"

const app=express()
app.use(express.json())

const client =createClient()
client.connect()
app.post("/submit",async(req,res)=>{
    const {problemid,userid,code,language}=req.body;
    //push it to database like prisma prisma.create()
   await client.lPush("submission",JSON.stringify({problemid,userid,code,language}))
    res.json({
        message:"submission recieved"
    })
})

app.listen(3000)

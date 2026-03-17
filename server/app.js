import express from 'express'
import cors from 'cors'
import { api } from './api/controller.js'
import { user } from './users.js/controller.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/launchers",api)
app.use("/api/auth/register",user)

app.listen(3000,()=>{
    console.log("server run");
})


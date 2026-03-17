import express from 'express'
import { create, deleteUser, update } from './servise.js'

export const user = express()

user.post("/create",create)

user.put("/update",update)

user.delete("/delete/:id",deleteUser)
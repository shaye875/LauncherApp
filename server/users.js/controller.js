import express from 'express'
import { create, deleteUser, get, update } from './servise.js'
import { checkAdmin } from '../utils/middelelware.js'

export const user = express()

user.post("/create",checkAdmin,create)

user.put("/update",checkAdmin,update)

user.delete("/delete/:id",checkAdmin,deleteUser)

user.get("/get",checkAdmin,get)
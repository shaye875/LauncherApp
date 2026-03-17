import express from 'express'
import {  getUser, login } from './servise.js'
import { checBasicUser } from '../utils/middelelware.js'

export const auth = express()

auth.post("/login",login)

auth.get("/getUser",checBasicUser,getUser)


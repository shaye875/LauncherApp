import express from 'express'
import { chanch, deleteById, getAll, getById, postLauncher } from './servise.js'
import { checBasicUser, checkIntelagents } from '../utils/middelelware.js'

export const api = express()

api.post("",checkIntelagents,postLauncher)

api.get("",checBasicUser,getAll)

api.get("/:id",checBasicUser,getById)

api.delete("/:id",checkIntelagents,deleteById)

api.put("/:id",checkIntelagents,chanch)
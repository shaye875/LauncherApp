import express from 'express'
import { deleteById, getAll, getById, postLauncher } from './servise.js'

export const api = express()

api.post("",postLauncher)

api.get("",getAll)

api.get("/:id",getById)

api.delete("/:id",deleteById)
import { isInformation, isTypes, schema } from "../utils/validation.js"
import { getAll, insert, removeById, updateOne } from "./qweries.js"


export async function create(req, res) {
    const body = req.body
    if (!isInformation(["username", "password", "email", "userType"], body)) {
        res.status(400)
        return res.json({ "false": "missing infprmation" })
    }
    if (!isTypes({ "username": "", "password": "", "email": "", "userType": "" }, body)) {
        res.status(400)
        return res.json({ "false": "one or more types not good" })
    }
    if (!schema({ 3: new Set([body.userType, "airports", "intellagens", "admin"]) })) {
        res.status(400)
        return res.json({ "false": "userType must bu airports,intellagens,admin" })
    }
    body["lastLogin"] = new Date()
    const arr = await getAll()
    for(let user of arr){
        if(user.userType === body.userType){
            res.status(409)
            return res.json({"false":"user type alredui exist"})
        }
    }
    const result = await insert(body)
    if (result.acknowledged) {
        res.status(200)
        res.json(result)
    } else {
        res.status(400)
        res.json(result)
    }
}

export async function update(req, res) {
    const body = req.body
    if (!isInformation(["_id", "username", "password", "email", "userType", "lastLogin"], body)) {
        res.status(400)
        return res.json({ "false": "missing infprmation" })
    }
    if (!isTypes({ "_id": "", "username": "", "password": "", "email": "", "userType": "", "lastLogin": "" }, body)) {
        res.status(400)
        return res.json({ "false": "one or more types not good" })
    }
    if (!schema({ 3: new Set([body.userType, "airports", "intellagens", "admin"]) })) {
        res.status(400)
        return res.json({ "false": "userType must bu airports,intellagens,admin" })
    }
    const result = await updateOne(body)
    if (result.modifiedCount === 1) {
        res.status(200)
        res.json(result)
    }
    else {
        res.status(404)
        res.json({ "false": "not found" })
    }
}

export async function deleteUser(req, res) {
    const { id } = req.params
    const result = await removeById(id)
    if (result.deletedCount === 1) {
        res.status(200)
        res.json(result)
    } else {
        res.status(404)
        res.json({ "false": "not found" })
    }
}

export async function get(req,res){
    const arr = await getAll()
    res.status(200)
    res.json(arr)
}
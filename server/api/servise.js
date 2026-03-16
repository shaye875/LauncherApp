import { insert, readAll, readById, removeById } from "./qweries.js"
import { isInformation, isTypes, schema } from "./validation.js"


export async function postLauncher(req, res) {
    const body = req.body
    if (!isInformation(["city", "roketType", "latitude", "longitude", "name"], body)) {
        res.status(400)
        res.json({ "false": "missing infprmation" })
    }
    if (!isTypes({ "city": "", "roketType": "", "latitude": 1, "longitude": 1, "name": "" }, body)) {
        res.status(400)
        res.json({ "false": "one or more types not good" })
    }
    if(!schema({4:new Set([body.roketType,"Shahab3", "Fetah110", "Radwan", "Kheibar"])})){
        res.status(400)
        res.json({"false":"roketType must bu Shahab3, Fetah110, Radwan, Kheibar"})
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

export async function getAll(req, res) {
    const arr = await readAll()
    res.status(200)
    res.json(arr)
}

export async function getById(req, res) {
    const { id } = req.params
    const result = await readById(id)
    if (result !== null) {
        res.status(200)
        res.json(result)
    } else {
        res.status(404)
        res.json({ "false": "not found" })
    }
}

export async function deleteById(req, res) {
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
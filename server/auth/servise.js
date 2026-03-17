import { getToken, veryfyToken } from "../JWT/token.js"
import { isInformation, isTypes, schema } from "../utils/validation.js"
import { checkUser, updateOne } from "./qweries.js"


export async function login(req, res) {
    const body = req.body
    if (!isInformation(["username", "password"], body)) {
        res.status(400)
        return res.json({ "false": "missing infprmation" })
    }
    if (!isTypes({ "username": "", "password": "" }, body)) {
        res.status(400)
        return res.json({ "false": "one or more types not good" })
    }
    const result = await checkUser(body)
    if (result === null) {
        res.status(404)
        return res.json({ "false": "not found" })
    }
    result.lastLogin = new Date()
    await updateOne(result)
    const token = getToken(result.username, result.password, result.userType)
    res.status(200)
    res.json({ token: token })
}

export async function getUser(req,res){
    const token = req.headers.token
    const user = veryfyToken(token)
    res.status(200)
    res.json({user:user})
}


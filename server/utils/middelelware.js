import { veryfyToken } from "../JWT/token.js"

export function checBasicUser(req, res, next) {
    const { token } = req.headers
    if (!veryfyToken(token)) {
        res.status(403)
        return res.json({ "false": "not token or token not good" })
    } else {
        next()
    }
}

export function checkIntelagents(req, res, next) {
    const { token } = req.headers
    const user = veryfyToken(token)
    if (!user) {
        res.status(403)
        return res.json({ "false": "not token or token not good" })
    } else if (user.userType === "airports") {
        res.status(403)
        return res.json({ "false": "you are not intelagents or admin" })
    }
    else {
        next()
    }
}

export function checkAdmin(req,res,next){
    const { token } = req.headers
    const user = veryfyToken(token)
    if (!user) {
        res.status(403)
        return res.json({ "false": "not token or token not good" })
    } else if (user.userType !== "admin") {
        res.status(403)
        return res.json({ "false": "you are not admin" })
    }
    else {
        next()
    }
}
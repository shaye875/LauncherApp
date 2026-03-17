import { ObjectId } from "mongodb";
import { getCollectinusers } from "../data/users.js";


const collection = await getCollectinusers()

export async function checkUser(user) {
    try {
        const result = await collection.findOne({ username: user.username, password: user.password })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

export async function updateOne(user) {
    try {
        const result = await collection.updateOne({ _id: new ObjectId(user._id) }, { $set: { username: user.username, password: user.password, email: user.email, userType: user.userType, lastLogin: user.lastLogin } })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

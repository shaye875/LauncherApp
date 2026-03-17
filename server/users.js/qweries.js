import { ObjectId } from "mongodb";
import { getCollectinusers } from "../data/users.js";


const collection = await getCollectinusers()

export async function insert(user){
    const result = await collection.insertOne(user)
    return result
}

export async function updateOne(user){
    const result = await collection.updateOne({_id:new ObjectId(user._id)},{$set:{username:user.username,password:user.password,email:user.email,userType:user.userType,lastLogin:user.lastLogin}})
    return result
}

export async function removeById(id){
   const result = await collection.deleteOne({_id:new ObjectId(id)})
   return result
}
// import { ObjectId } from "mongodb";
// import { getCollectinusers } from "../data/users.js";


// const collection = await getCollectinusers()

// export async function insert(user) {
//     try {
//         const result = await collection.insertOne(user)
//         return result
//     } catch (err) {
//         throw new Error(err)
//     }
// }

// export async function readAll() {
//     try {
//         const result = await collection.find({}).toArray()
//         return result
//     } catch (err) {
//         throw new Error(err)
//     }
// }

// export async function readById(id) {
//     try {
//         const result = await collection.findOne({ _id: new ObjectId(id) })
//         return result
//     } catch (err) {
//         throw new Error(err)
//     }
// }

// export async function removeById(id){
//     try {
//         const result = await collection.deleteOne({_id:new ObjectId(id)})
//         return result
//     } catch (err) {
//         throw new Error(err)
//     }
// }
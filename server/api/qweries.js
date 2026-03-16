import { ObjectId } from "mongodb";
import { getCollectin } from "../data/launching.js";


const collection = await getCollectin()

export async function insert(launching) {
    try {
        const result = await collection.insertOne(launching)
        return result
    } catch (err) {
        throw new Error(err)
    }
}

export async function readAll() {
    try {
        const result = await collection.find({}).toArray()
        return result
    } catch (err) {
        throw new Error(err)
    }
}

export async function readById(id) {
    try {
        const result = await collection.findOne({ _id: new ObjectId(id) })
        return result
    } catch (err) {
        throw new Error(err)
    }
}

export async function removeById(id){
    try {
        const result = await collection.deleteOne({_id:new ObjectId(id)})
        return result
    } catch (err) {
        throw new Error(err)
    }
}
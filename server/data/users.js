import { MongoClient } from 'mongodb'
import 'dotenv/config'


export async function getCollectinusers(){
    const client = new MongoClient(process.env.URL)
    client.connect()
    const db = client.db(process.env.DATABASE)
    const collection = db.collection("users")
    return collection
}
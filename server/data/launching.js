import { MongoClient } from 'mongodb'
import 'dotenv/config'


export async function getCollectin(){
    const client = new MongoClient(process.env.URL)
    client.connect()
    const db = client.db(process.env.DATABASE)
    const collection = db.collection("launching")
    return collection
}


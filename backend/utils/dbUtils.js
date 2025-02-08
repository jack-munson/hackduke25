require("dotenv").config()
const { MongoClient } = require("mongodb")

const uri = process.env.MONGO_URI
let client = new MongoClient(uri)

async function connectDB() {
    try {
        if (!client) {
            client = new MongoClient(uri)
        }
        await client.connect()
        db = client.db('Users')
        return db
    } catch (err) {
        console.log("Connection failed:", err)
        throw Error(err.message)
    }
}

async function closeConnection() {
    if (client) {
      try {
        await client.close()
        client = null
        db = null
        console.log('MongoDB connection closed')
      } catch (err) {
        console.error('Error closing MongoDB connection:', err.message)
      }
    } else {
      console.log('MongoDB connection not initialized')
    }
}  

module.exports = { connectDB, closeConnection }
const { connectDB, closeConnection } = require("../utils/dbUtils")

const createUser = async (newUser) => {
    try {
        const db = await connectDB()
        const result = await db.collection("user_credentials").insertOne(newUser)
        console.log(`New user created with id: ${result.insertedId}`)
        return result.insertedId
    } catch (err) {
        console.log(`Error creating user: ${err.message}`)
        throw Error(err.message)
    } finally {
        await closeConnection()
    }
}

const checkUserExists = async (username) => {
    try {
        const db = await connectDB();
        const existingUser = await db.collection("user_credentials").findOne({ username: username });
        
        if (existingUser) {
            console.log("User exists")
            return true;
        } else {
            console.log("User does not exist")
            return false;
        }   
    } catch (err) {
        console.log(`Error checking for user: ${err.message}`)
    } finally {
        await closeConnection()
    }
}

const getUserByUName = async(username) => {
    try {
        const db = await connectDB();
        const existingUser = await db.collection("user_credentials").findOne({ username: username });
        
        if (existingUser) {
            console.log("User exists")
            return existingUser;
        } else {
            throw Error("User does not exist");
        }   
    } catch (err) {
        console.log(`Error fetching user: ${err.message}`)
    } finally {
        await closeConnection()
    }
}

module.exports = { createUser, checkUserExists, getUserByUName }
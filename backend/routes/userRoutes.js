const express = require('express')
const router = express.Router()

const {
    createUser,
    checkUserExists,
    getUserByUName,
} = require("../data_access/userData");

function validatePasswordFormat(password) {
    const passwordRegex = /^(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

router.post('/loginUser', async (req, res) => {
    console.log("Made it to /loginUser")
    const { username, password } = req.body

    if (!username) {
        return res.status(400).json({message: "Missing username"})
    }

    if (!password) {
        return res.status(400).json({message: "Missing password"})
    }

    try {
        const result = await getUserByUName(username)
        if (result.password == password) {
            return res.status(200).json({ id: result._id })
        } else {
            return res.status(404).json({ message: "Incorrect password" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: "Error in getUserByUName" });
    }
})

router.post('/registerUser', async (req, res) => {
    console.log("Made it to /registerUser")
    const { username, password, type } = req.body

    if (!username) {
        return res.status(400).json({message: "Missing username"})
    }

    if (!password) {
        return res.status(400).json({message: "Missing password"})
    }

    if (!type) {
        return res.status(400).json({message: "Missing password"})
    }

    if (!validatePasswordFormat(password)) {
        return res.status(400).json({message: "Invalid password"})
    }

    const existingUser = await checkUserExists(username)
    if (existingUser) {
        return res.status(400).json({message: "Username already exists"})
    }

    const newUser = {
        username: username,
        password: password,
        type: type,
    }
    try {
        const result = await createUser(newUser);
        console.log(`User created: ${result}`)
        return res.status(201).json({ id: result });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: "Error in createUser" });
    }
})

module.exports = router

const express = require('express');
const app = express();
const port = 3333;

app.use(express.json());

const userRoutes = require("./routes/userRoutes")

app.use("/user", userRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
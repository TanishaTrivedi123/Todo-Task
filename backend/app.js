const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

// ---------------middleware-----------------
db();
app.use(express.json());
app.use(cors())

const PORT = 8080;

app.get("/", (req,res) => {
    res.send("Jai shree krishn");
})

// --------------------------require route path-------------------
const Signup = require("./routes/AddUser")

//--------------------------Call the path---------------------
app.use("/api", Signup)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});
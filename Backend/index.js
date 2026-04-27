import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
const app = express()
dotenv.config()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hello this is my habbit app")
})
connectDB()
app.listen(process.env.PORT,()=>{console.log("Your server has been started")})
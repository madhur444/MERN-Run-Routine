import express from "express"
const app = express()
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
dotenv.config()
app.get("/", (req, res) => {
    res.send("hello this is my habbit app")
})
connectDB()
app.listen(process.env.PORT)
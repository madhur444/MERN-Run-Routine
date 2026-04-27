import express from "express";
import { Login,Register } from "../controllers/userController.js";
const route =  express.Router()
route.post("/login",Login)
route.post("/register",Register)
export default route
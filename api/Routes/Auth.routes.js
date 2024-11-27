import express from "express";
import { Signupcontrollers } from "../Controllers/Authcontrollers.js";

const Authrouter = express.Router();

Authrouter.post("/signup", Signupcontrollers)

export default Authrouter;
// import 
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import Mongodb from "./Config/db.js";
import Authrouter from "./Routes/Auth.routes.js";

// config
dotenv.config();
Mongodb()
// rest object
const app = express();

// app middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

// routes declare
app.use("/api/v1/auth", Authrouter);

// res function
app.get("/", (req, res) => {
  res.send("Tradeditor is ready to built");
});

// port function
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
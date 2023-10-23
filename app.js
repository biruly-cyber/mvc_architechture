import express from "express"
import userRoutes from "./routes/user.js"
import dotenv from "dotenv"
export const app = express()

//configure dot env file
dotenv.config({
    path: "./data/.env"
})

//define router 
const router = express.Router();


//using middleware
app.use(express.json())


app.use("/users",userRoutes )





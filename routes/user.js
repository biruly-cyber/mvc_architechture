import express from "express";
import { getAllUsers } from "../controller/userController.js";
const router = express.Router();


//default route
router.get("/", (req, res)=>{
    res.send("nice working");
})

//aget all the users
router.get("/all", getAllUsers)
 

export default router;   
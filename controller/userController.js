import { User } from "../models/User.js";

export const getAllUsers = async(req, res)=>{

    //get all the user
    const users = await User.find({})

    res.json({
        success:true,
        users
    })
}
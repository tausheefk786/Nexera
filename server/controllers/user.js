import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { sendToken } from "../utils/features.js";

const newUser = async (req,res)=>{

const { name, username, password, bio } = req.body && Object.keys(req.body).length ? req.body : req.query;



    console.log(req.body);
    const avatar = {
        public_id : "acqee",
        url: "wvwv",
    };
    const user = await User.create ({
        name,
        bio,
        username,
        password,
        avatar,
     })
   
    sendToken(res,user,201,"User created");
}
const login =  async (req,res)=>{

    const {username ,password} = req.body;
    const user = await User.findOne({username}).select("+password");
    if(!user) {
        return res.status(400).json({message:"Invalid credentials"})
    }
    const isMatch = await compare(password,user.password);

    if(!isMatch) {
        return res.status(400).json({message:"Invalid credentials"})
    }
    sendToken(res,user,200,`Welcome back, ${user.name}`);
}

export {login, newUser};
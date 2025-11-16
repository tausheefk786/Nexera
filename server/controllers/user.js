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
const login = (req,res)=>{
    res.send("hiii baby")
}

export {login, newUser};
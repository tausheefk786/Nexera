import { User } from "../models/user.js";

const newUser = async (req,res)=>{

    const {name,username,password,bio} = req.body;

    console.log(req.body);
    const avatar = {
        public_id : "acqee",
        url: "wvwv",
    };
    await User.create ({
        name,
        bio,
        username,
        password,
        avatar,
     })
    res.status(201).json({message: "user created baby"})
}
const login = (req,res)=>{
    res.send("hiii baby")
}

export {login, newUser};
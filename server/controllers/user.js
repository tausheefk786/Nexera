import { User } from "../models/user.js";

const newUser = async (req,res)=>{

    const avatar = {
        public_id : "acqee",
        url: "wvwv",
    };
    await User.create ({
        name: "madarjuhv",
        username: "chodihv",
        password: "bhadwaijhv",
        avatar,
    })
    res.status(201).json({message: "user created baby"})
}
const login = (req,res)=>{
    res.send("hiii baby")
}

export {login, newUser};
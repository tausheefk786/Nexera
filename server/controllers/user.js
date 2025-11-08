const newUser = async (req,res)=>{

    const avatar = {
        public_id : "acqee",
        url: "wvwv",
    };
    await User.create({
        name: "madar",
        username: "chod",
        password: "bhadwa",
        avatar,
    })
    res.status(201).json({message: "user created baby"})
}
const login = (req,res)=>{
    res.send("hiii baby")
}

export {login, newUser};
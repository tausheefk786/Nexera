import mongoose from "mongoose";
import { User } from "../models/user.js";


import { jwt } from "jsonwebtoken";


const cookieOptions = 
   {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite : "none",
    httpOnly: true,
    secure: true,
  }

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      dbName: "Nexera",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true, // ✅ replaces ssl
      tlsAllowInvalidCertificates: false, // ✅ replaces sslValidate
      retryWrites: true,
      w: "majority",
      appName: "Cluster0",
    });

    console.log(`✅ Connected to MongoDB at: ${mongoose.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

const sendToken = (res, user ,code ,message)=>{
  const token = jwt.sign({_id: user._id},process.env.JWT_SECRET);

return res
  .status(code)
  .cookie("nexera-token", token,cookieOptions)
  .json({
    success: true,
    message,
    
  });
};

export {connectDB,sendToken}

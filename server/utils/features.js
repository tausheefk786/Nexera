import mongoose from "mongoose";

export const connectDB = async (uri) => {
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

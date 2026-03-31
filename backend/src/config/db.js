import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";
    await mongoose.connect(uri);
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error conectando a MongoDB:", err.message);
    process.exit(1);
  }
};

export default conectarDB;

import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://ricardomtzlp05:B9fnovwYd8RuEteO@cluster0.suyeoa1.mongodb.net/api4";

//Este archivo es para crear la conexion a base de datos
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect DB");
  } catch (error) {
    console.log(error);
  }
};

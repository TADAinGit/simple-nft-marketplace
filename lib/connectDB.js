import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  mongoose.connect(process.env.MONGODB_URI, {}, (err) => {
    if (err) throw err;
    console.log("Mongodb connected");
  });
};

export default connectDB;

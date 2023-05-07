import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    profileId: {
      type: String,
    },
    username: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
    },
    details: [],
  },
  { timestamps: true }
);

let Users = mongoose.models.users || mongoose.model("users", userSchema);

export default Users;

// const user = { id: "", username: "", address: "", details: [] };
// const asset = {};
// const collection = {};

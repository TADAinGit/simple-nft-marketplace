import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema(
  {
    profileId: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    details: [],
  },
  { timestamps: true }
);

let Collections =
  mongoose.models.collections ||
  mongoose.model("collections", collectionSchema);

export default Collections;

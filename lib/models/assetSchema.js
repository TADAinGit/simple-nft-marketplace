import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    collectionName: {
      type: String,
    },
    image: {
      type: String,
    },
    owner: {
      type: String,
    },
    isSelling: {
      type: Boolean,
      default: false,
    },
    isAuctioning: {
      type: Boolean,
      default: false,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    metadata: [],
  },
  { timestamps: true }
);

let Assets = mongoose.models.assets || mongoose.model("assets", assetSchema);

export default Assets;

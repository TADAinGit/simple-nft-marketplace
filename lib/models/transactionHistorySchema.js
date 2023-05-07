import mongoose from "mongoose";

const transactionHistorySchema = new mongoose.Schema(
  {
    hash: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    value: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

let TransactionHistory =
  mongoose.models.transactionHistories ||
  mongoose.model("transactionHistories", transactionHistorySchema);

export default TransactionHistory;

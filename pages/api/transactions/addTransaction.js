import connectDB from "../../../lib/connectDB";
import TransactionHistory from "../../../lib/models/transactionHistorySchema";

const addAsset = async (req, res) => {
  const { transaction, content, value } = req.body;
  console.log(transaction);
  await connectDB();
  try {
    let transactionData = await TransactionHistory.findOne({
      hash: transaction?.hash || transaction?.transactionHash,
    });

    if (!transactionData) {
      const newTransaction = new TransactionHistory({
        hash: transaction?.hash || transaction?.transactionHash,
        from: transaction.from,
        to: transaction.to,
        value: value,
        content: content,
      });
      await newTransaction.save();
      return res.status(200).json({
        data: newTransaction,
        message: "Add new transaction history data: " + newTransaction.hash,
      });
    }
    return res
      .status(400)
      .json({ message: "Occur error but we don't what is it." });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default addAsset;

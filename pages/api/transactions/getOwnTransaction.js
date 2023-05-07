import connectDB from "../../../lib/connectDB";
import TransactionHistory from "../../../lib/models/transactionHistorySchema";

const getTransactionByOwnerAddres = async (req, res) => {
  const { owner } = req.body;

  await connectDB();
  try {
    await TransactionHistory.find({ $or: [{ from: owner }, { to: owner }] })
      .sort("-createdAt")
      .then((transactions) => {
        return res
          .status(200)
          .json({ data: transactions, total: transactions.length });
      })
      .catch((err) => {
        if (err)
          return res.status(400).json({ message: "Error come.", error: err });
      });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default getTransactionByOwnerAddres;

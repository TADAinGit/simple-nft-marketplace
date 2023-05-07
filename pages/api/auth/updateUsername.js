import connectDB from "../../../lib/connectDB";
import Users from "../../../lib/models/userSchema";

const updateUsername = async (req, res) => {
  const { address, username } = req.body;

  await connectDB();
  try {
    await Users.findOneAndUpdate({ address: address }, { username: username })
      .then(() => {
        return res.status(200).json({ message: "Update username success" });
      })
      .catch((err) => {
        if (err)
          return res.status(400).json({ message: "Update username fail" });
      });
  } catch (err) {
    if (err)
      return res
        .status(400)
        .json({ message: "Update username fail", error: err });
  }
};

export default updateUsername;

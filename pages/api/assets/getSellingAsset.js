import connectDB from "../../../lib/connectDB";
import Assets from "../../../lib/models/assetSchema";

const getSellingAsset = async (req, res) => {
  await connectDB();
  try {
    await Assets.find({ isSelling: true, isApproved: true })
      .then((data) => {
        return res.status(200).json({ assets: data });
      })
      .catch((err) => {
        if (err) return res.status(400).json({ message: "No asset found" });
      });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default getSellingAsset;

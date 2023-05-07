import connectDB from "../../../lib/connectDB";
import Assets from "../../../lib/models/assetSchema";

const getUnapprovedAssets = async (req, res) => {
  await connectDB();
  try {
    await Assets.find({ isApproved: false })
      .then((assets) => {
        return res.status(200).json({ data: assets, total: assets.length });
      })
      .catch((err) => {
        if (err) return res.status(400).json({ message: "No asset found" });
      });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default getUnapprovedAssets;

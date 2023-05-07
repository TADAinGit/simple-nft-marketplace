import connectDB from "../../../lib/connectDB";
import Assets from "../../../lib/models/assetSchema";

const getAssetsByOwnerAddres = async (req, res) => {
  const { owner } = req.body;

  await connectDB();
  try {
    await Assets.find({ owner: owner, isApproved: true })
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

export default getAssetsByOwnerAddres;

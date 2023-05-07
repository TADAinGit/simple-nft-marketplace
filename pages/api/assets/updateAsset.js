import connectDB from "../../../lib/connectDB";
import Assets from "../../../lib/models/assetSchema";

const updateAsset = async (req, res) => {
  const { owner, tokenId, update } = req.body;

  await connectDB();
  try {
    let nft = await Assets.findOne({
      tokenId: tokenId,
    });
    if (!nft) {
      return res.status(400).json({ message: "Asset does not exist" });
    } else {
      await Assets.findOneAndUpdate(
        {
          tokenId: tokenId,
        },
        update
      );
      return res.status(200).json({ message: "Update success" });
    }
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default updateAsset;

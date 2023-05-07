import connectDB from "../../../lib/connectDB";
import Assets from "../../../lib/models/assetSchema";

const addAsset = async (req, res) => {
  const { tokenId, name, description, collection, image, owner, metadata } =
    req.body;

  await connectDB();
  try {
    let nft = await Assets.findOne({
      name: name,
    });
    if (!nft) {
      const newNFT = new Assets({
        tokenId,
        name,
        description,
        collectionName: collection,
        image,
        owner,
        metadata,
      });
      await newNFT.save();
      return res
        .status(200)
        .json({ data: newNFT, message: "Add new asset: " + name });
    }
    return res.status(400).json({ message: "Asset exist" });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default addAsset;

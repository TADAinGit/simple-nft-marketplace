import connectDB from "../../../lib/connectDB";
import Collections from "../../../lib/models/collectionSchema";

const getCollectionByProfileId = async (req, res) => {
  const { profileId } = req.body;

  await connectDB();
  try {
    await Collections.find({ profileId: profileId })
      .then((data) => {
        return res.status(200).json({ collections: data });
      })
      .catch((err) => {
        if (err)
          return res.status(400).json({ message: "No collection found" });
      });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default getCollectionByProfileId;

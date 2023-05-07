import connectDB from "../../../lib/connectDB";
import Collections from "../../../lib/models/collectionSchema";

const addCollection = async (req, res) => {
  const { name, description, profileId } = req.body;

  await connectDB();
  try {
    let collectionsFoundData = await Collections.findOne({
      profileId: profileId,
      name: name,
    });
    if (!collectionsFoundData) {
      const newCollection = new Collections({
        profileId: profileId,
        name: name,
        description: description || "",
      });
      await newCollection.save();
      return res
        .status(200)
        .json({ data: newCollection, message: "Add new collection: " + name });
    }
    return res.status(400).json({ message: "Collection exist" });
  } catch (err) {
    if (err) return res.status(400).json({ message: "Error", error: err });
  }
};

export default addCollection;

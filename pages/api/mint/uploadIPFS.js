import Moralis from "moralis";

// const abi = [
//   {
//     path: "moralis/logo.jpg",
//     content:
//       "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3",
//   },
// ];

const uploadIPFS = async (req, res) => {
  const { data } = req.body;

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  await Moralis.EvmApi.ipfs
    .uploadFolder({
      abi: [data],
    })
    .then((response) => {
      return res.status(200).json({ data: response });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

export default uploadIPFS;

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import TADAtoken from "../../../lib/constant/abis/TADAtoken.json";

const abi = TADAtoken;

export default async function handler(req, res) {
  const { functionName, contractAddress, params } = req.body;

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const message = await Moralis.EvmApi.utils.runContractFunction({
      abi,
      functionName,
      chain: EvmChain.BSC_TESTNET,
      address: contractAddress,
      params,
    });

    res.status(200).json(message);
  } catch (error) {
    res.status(400).json({ error });
    console.error(error);
  }
}

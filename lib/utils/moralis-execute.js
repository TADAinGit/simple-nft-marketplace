import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

export const executeFunction = async ({
  abi,
  functionName,
  chain = EvmChain.BSC_TESTNET,
  contractAddress,
  params,
}) => {
  if (!abi || !functionName || !contractAddress) {
    throw "Request [abi || functionName || contractAddress] for this function.";
  }
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const response = await Moralis.EvmApi.utils.runContractFunction({
    abi,
    functionName,
    chain,
    address: contractAddress,
    params,
  });
  return {
    props: {
      response,
    },
  };
};

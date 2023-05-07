import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

const handler = async (req, res) => {
  const { address } = req.body;
  // reads the api key from .env.local and starts Moralis SDK
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  //   const address = process.env.MY_ADDRESS;
  // const address = "0x2189c3Bf94Ad52A69465C64E22abd9A88AfC3c25";

  // Promise.all() for receiving data async from two endpoints
  const [nativeBalance, tokenBalances] = await Promise.all([
    Moralis.EvmApi.balance.getNativeBalance({
      chain: EvmChain.BSC_TESTNET,
      address,
    }),
    Moralis.EvmApi.token.getWalletTokenBalances({
      chain: EvmChain.BSC_TESTNET,
      address,
      tokenAddresses: "0xf9e6E1F27E33797B161b3D7Fe8f2838560a82f3C",
    }),
  ]);
  // const response = await Moralis.EvmApi.balance.getNativeBalance({
  //   chain: EvmChain.BSC_TESTNET,
  //   address: address,
  // });

  res.status(200).json({
    // formatting the output
    balance: nativeBalance.result.balance.ether,
    balanceESDC: tokenBalances.result[0] || 0,
  });
};

export default handler;

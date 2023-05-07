import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";

const Native = ({ address, nativeBalance }) => {
  return (
    <div>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance} ETH</h3>
    </div>
  );
};

export async function getServerSideProps(context) {
  // reads the api key from .env.local and starts Moralis SDK
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const address = process.env.MY_ADDRESS;
  // await Moralis.EvmApi.utils.runContractFunction
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: EvmChain.BSC_TESTNET,
    address,
  });

  return {
    props: {
      address,
      // Return the native balance formatted in ether via the .ether getter
      nativeBalance: nativeBalance.result.balance.ether,
    },
  };
}

export default Native;

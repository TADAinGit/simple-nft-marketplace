import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/evm-utils";
import contractAbi from "../lib/constant/abis/abi.json";
import axios from "axios";
// const chain = EvmChain.ETHEREUM;

// await Moralis.start({
//   apiKey: "<YOUR_API_KEY>",
//   // ...and any other configuration
// });

// const response = await Moralis.EvmApi.utils.runContractFunction({
//   abi,
//   functionName,
//   address,
//   chain,
// });
// console.log(response.result);
const Text = async (props) => {
  const { address } = props;
  const getBalance = async () => {
    // console.log(address);
    // await Moralis.EvmApi.ipfs.
    try {
      const data = await axios.post(
        "/api/balance",
        { address },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(data.balance);
      // setBalance(data.balance);
      return data.balance;
    } catch (error) {
      throw error;
    }
  };
  const a = await getBalance();
  return <div>Data: {a}</div>;
};

export async function getServerSideProps(context) {
  // const abi = contractAbi;
  // const functionName = "owner";
  // await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  // //   const address = process.env.MY_ADDRESS;
  // const contractAddress = "0x12822A7C325E6E3c349176D7bBDD907E925bd9E0";

  // const response = await Moralis.EvmApi.utils.runContractFunction({
  //   abi,
  //   functionName,
  //   chain: EvmChain.BSC_TESTNET,
  //   address: contractAddress,
  //   params: {
  //     account: "0xdFBE4C18c693FadD657533eD1591c5CD80C61831",
  //   },
  // });

  // console.log(response.result);
  const address = process.env.MY_ADDRESS;
  return {
    props: {
      address,
    },
  };
}

export default Text;

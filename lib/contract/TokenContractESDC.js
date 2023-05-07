import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "../constant/interface";
import TokenESDCABI from "../../lib/constant/abis/ESDC_TOKEN.json";
// import { getUsdtAbi } from "./utils/getAbis";
// import { getUsdtAddress } from "./utils/getAddress";

export default class TokenContractESDC extends Erc20 {
  constructor(provider) {
    super(provider, "0xf9e6E1F27E33797B161b3D7Fe8f2838560a82f3C", TokenESDCABI);
  }
}

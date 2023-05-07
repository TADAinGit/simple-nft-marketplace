// import {
//     TransactionResponse,
//   } from "@ethersproject/abstract-provider";
import { BigNumber, ethers, Overrides } from "ethers";

export default class BaseInterface {
  _provider;
  _contractAddress;
  _abis;
  _contract;
  _option;

  constructor(provider, address, abi) {
    this._provider = provider;
    this._contractAddress = address;
    this._abis = abi;
    this._option = { gasLimit: 1000000 };
    this._contract = new ethers.Contract(address, abi, provider.getSigner());
  }

  _handleTransactionResponse = async (tx) => {
    const recept = await tx.wait();
    return recept;
  };

  _numberToEth = (amount) => {
    return ethers.utils.parseEther(amount.toString());
  };

  _toNumber = (bigNumber) => {
    try {
      return bigNumber.toNumber();
    } catch (er) {
      return Number.parseFloat(ethers.utils.formatEther(bigNumber));
    }
  };

  _toEther = (bigNumber) => {
    return Number.parseFloat(ethers.utils.formatEther(bigNumber));
  };

  _toWei = (amount) => {
    return ethers.utils.parseUnits(amount.toString());
  };
}

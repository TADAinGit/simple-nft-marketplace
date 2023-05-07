import { ethers } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import BaseInterface from "./BaseInterface";

class Erc721 extends BaseInterface {
  constructor(provider, address, abi) {
    super(provider, address, abi);
  }

  async totalSupply() {
    return this._contract.totalSupply();
  }

  async balanceOf(walletAddress) {
    const balance = await this._contract.balanceOf(walletAddress);
    return this._toNumber(balance);
  }

  async ownerOf(tokenId) {
    return this._contract.ownerOf(tokenId);
  }

  async getApproved(tokenId) {
    return this._contract.getApproved(tokenId);
  }

  async approve(toAddress, tokenId) {
    return this._contract.approve(toAddress, tokenId);
  }

  async safeTransferFrom(fromAddress, toAddress, tokenId) {
    //https://github.com/ethers-io/ethers.js/issues/1160
    const tx = await this._contract[
      "safeTransferFrom(address,address,uint256)"
    ](fromAddress, toAddress, tokenId, this._option);
    return this._handleTransactionResponse(tx);
  }

  async transferFrom(fromAddress, toAddress, tokenId) {
    const tx = await this._contract.transferFrom(
      fromAddress,
      toAddress,
      tokenId
    );
    return this._handleTransactionResponse(tx);
  }
}

export default Erc721;

import { ethers } from "ethers";
import { Erc721 } from "../../lib/constant/interface";
import MarketplaceABI from "../../lib/constant/abis/ESDC_MARKETPLACE.json";

export default class MarketContract extends Erc721 {
  constructor(provider) {
    const rpcProvider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    super(
      provider || rpcProvider,
      "0xeA6b1216832fE1Ec7CF7Fa9715A6560B0e0dCb8e",
      MarketplaceABI
    );
  }

  getNFTListedOnMarketplace = async () => {
    const items = await this._contract.getListedNft();
    const nfts = items.map((item) => ({
      tokenId: this._toNumber(item.tokenId),
      author: item.author,
      price: this._toNumber(item.price),
    }));
    return nfts;
  };

  getMyNftListed = async (address) => {
    const nfts = await this.getNFTListedOnMarketplace();
    return nfts.filter((p) => p.author === address);
  };

  listNft = async (tokenId, price) => {
    const tx = await this._contract.listNft(
      tokenId,
      this._numberToEth(price),
      this._option
    );
    return this._handleTransactionResponse(tx);
  };

  unListNft = async (tokenId) => {
    const tx = await this._contract.unlistNft(tokenId, this._option);
    return this._handleTransactionResponse(tx);
  };

  buyNft = async (tokenId, price) => {
    const tx = await this._contract.buyNft(
      tokenId,
      this._numberToEth(price),
      this._option
    );
    return this._handleTransactionResponse(tx);
  };
}

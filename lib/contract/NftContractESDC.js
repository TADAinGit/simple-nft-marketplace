// import { IAuctionInfo, INftItem } from "@/_types_";
import { BigNumber, ethers } from "ethers";
import { Erc721 } from "../constant/interface";
import NFTABI from "../constant/abis/ESDC_NFT.json";

export default class NftContract extends Erc721 {
  constructor(provider) {
    const rpcProvider = new ethers.providers.JsonRpcProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    super(
      provider || rpcProvider,
      "0xCaCd189E1BC7f94402990AC107Ce8eC27DEA5d73",
      NFTABI
    );
  }

  mintNFT = async (uri) => {
    const data = await this._contract.mintNFT(uri);
    return data;
  };

  //   private _listTokenIds = async (address: string) => {
  //     const urls: BigNumber[] = await this._contract.listTokenIds(address);
  //     const ids = await Promise.all(urls.map((id) => this._toNumber(id)));
  //     return ids;
  //   };

  //   getListNFT = async (address: string): Promise<INftItem[]> => {
  //     const ids = await this._listTokenIds(address);
  //     return Promise.all(
  //       ids.map(async (id) => {
  //         const tokenUrl = await this._contract.tokenURI(id);
  //         const obj = await (await fetch(`${tokenUrl}.json`)).json();
  //         const item: INftItem = { ...obj, id };
  //         return item;
  //       })
  //     );
  //   };

  //   getNftInfo = async (nfts: Array<any>) => {
  //     return Promise.all(
  //       nfts.map(async (o: any) => {
  //         const tokenUrl = await this._contract.tokenURI(o.tokenId);
  //         const obj = await (await fetch(`${tokenUrl}.json`)).json();
  //         const item: INftItem = { ...obj, id: o.tokenId, author: o.author, price: o.price };
  //         return item;
  //       })
  //     );
  //   };

  //   getNftAuctionInfo = async (nftsAuctions: IAuctionInfo[]) => {
  //     return Promise.all(
  //       nftsAuctions.map(async (o: IAuctionInfo) => {
  //         const tokenUrl = await this._contract.tokenURI(o.tokenId);
  //         const obj = await (await fetch(`${tokenUrl}.json`)).json();
  //         const item: IAuctionInfo = { ...o, ...obj, id: o.tokenId };
  //         return item;
  //       })
  //     );
  //   };
}

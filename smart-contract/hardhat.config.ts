import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
/** @type import('hardhat/config').HardhatUserConfig */
dotenv.config({ path: __dirname + "/.env" });
module.exports = {
  solidity: "0.8.17",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};

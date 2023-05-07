import { ethers, hardhatArguments } from "hardhat";
import * as dotenv from "dotenv";
import * as Config from "./config";
dotenv.config({ path: __dirname + "/.env" });

const main = async () => {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [developer] = await ethers.getSigners();
  console.log("Deploy from address: ", developer.address);

  // const ESDC = await ethers.getContractFactory("ESDC_token");
  // const esdc = await ESDC.deploy();
  // console.log("Token address: ", esdc.address);
  // Config.setConfig(network + ".ESDC", esdc.address);

  // const ESDC_NFT = await ethers.getContractFactory("ESDC_NFT");
  // const nftESDC = await ESDC_NFT.deploy(
  //   "0xf9e6E1F27E33797B161b3D7Fe8f2838560a82f3C"
  // );
  // console.log("NFT address: ", nftESDC.address);
  // Config.setConfig(network + ".NFT", nftESDC.address);

  const ESDC_MARKETPLACE = await ethers.getContractFactory("Marketplace");
  const marketplaceESDC = await ESDC_MARKETPLACE.deploy(
    "0xf9e6E1F27E33797B161b3D7Fe8f2838560a82f3C",
    "0xCaCd189E1BC7f94402990AC107Ce8eC27DEA5d73"
  );
  console.log("Marketplace address: ", marketplaceESDC.address);
  Config.setConfig(network + ".MARKETPLACE", marketplaceESDC.address);

  // const Vault = await ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // console.log("Vault address: ", vault.address);
  // Config.setConfig(network + ".Vault", vault.address);

  // const USDT = await ethers.getContractFactory("USDT");
  // const token_USDT = await USDT.deploy();
  // console.log("USDT address: ", token_USDT.address);
  // Config.setConfig(network + ".USDT", token_USDT.address);

  // const devAddress = "0xdFBE4C18c693FadD657533eD1591c5CD80C61831";
  // const icoAddress = token_TADA.address;
  // const ICO = await ethers.getContractFactory("TADACrowdSale");
  // const ico = await ICO.deploy(1000, 100, devAddress, icoAddress);
  // console.log("ICO address: ", ico.address);
  // Config.setConfig(network + ".ico", ico.address);

  await Config.updateConfig();
};

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

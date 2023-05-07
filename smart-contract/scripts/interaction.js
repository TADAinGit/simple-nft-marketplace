// require("dotenv").config();
// const Web3 = require("web3");

// const abi = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//     ],
//     name: "allowance",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "approve",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//     ],
//     name: "balanceOf",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burn",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "burnFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "decimals",
//     outputs: [
//       {
//         internalType: "uint8",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "subtractedValue",
//         type: "uint256",
//       },
//     ],
//     name: "decreaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "addedValue",
//         type: "uint256",
//       },
//     ],
//     name: "increaseAllowance",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "mint",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "name",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "symbol",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalSupply",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transfer",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "transferFrom",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];
// const address = "0x857f77F6d3A70D6186114b9A5D5aCF4815691Ae0";
// privateKey = process.env.PRIVATE_KEY;
// const myAddress = "0xdFBE4C18c693FadD657533eD1591c5CD80C61831";
// const tempAddress = "0xfdd4A73fcb2db1eac3366E3987068FC294371ba4";

// async function interact() {
//   const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
//   const contract = await new web3.eth.Contract(abi, address);

//   //   balance = await contract.methods.balanceOf(myAddress).call();
//   //   console.log(balance);
//   await web3.eth.accounts.wallet.add(privateKey);
//   let receiverBalanceBefore = await contract.methods
//     .balanceOf(tempAddress)
//     .call();

//   let rs = await contract.methods.transfer(tempAddress, 10000000).send({
//     from: myAddress,
//     gas: 300000,
//   });

//   let receiverBalanceAfter = await contract.methods
//     .balanceOf(tempAddress)
//     .call();
//   console.log({
//     result: rs,
//     before: receiverBalanceBefore,
//     after: receiverBalanceAfter,
//   });
// }
// interact();

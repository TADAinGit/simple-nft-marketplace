/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Vault, VaultInterface } from "../../contracts/Vault";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAW_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWithdrawAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxAmount",
        type: "uint256",
      },
    ],
    name: "setMaxWithdrawAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "setToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isEnable",
        type: "bool",
      },
    ],
    name: "setWithdrawEnable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEnable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5062000032620000266200005c60201b60201c565b6200006460201b60201c565b620000566000801b6200004a6200005c60201b60201c565b6200012860201b60201c565b620003b7565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200013a82826200013e60201b60201c565b5050565b6200015582826200018660201b62000cb81760201c565b6200018181600260008581526020019081526020016000206200027760201b62000d981790919060201c565b505050565b620001988282620002af60201b60201c565b6200027357600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002186200005c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620002a7836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200031a60201b60201c565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006200032e83836200039460201b60201c565b620003895782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506200038e565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b61275180620003c76000396000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c806391d14854116100ad578063d547741f11610071578063d547741f1461032c578063df74e02814610348578063e02023a114610364578063f2fde38b14610382578063f516440c1461039e5761012b565b806391d1485414610274578063a217fddf146102a4578063b5b68afe146102c2578063b6b55f25146102e0578063ca15c873146102fc5761012b565b806336568abe116100f457806336568abe146101e4578063715018a614610200578063827a560b1461020a5780638da5cb5b146102265780639010d07c146102445761012b565b8062f714ce1461013057806301ffc9a71461014c578063144fa6d71461017c578063248a9ca3146101985780632f2ff15d146101c8575b600080fd5b61014a60048036038101906101459190611990565b6103bc565b005b61016660048036038101906101619190611a28565b6105b1565b6040516101739190611a70565b60405180910390f35b61019660048036038101906101919190611ac9565b61062b565b005b6101b260048036038101906101ad9190611b2c565b6106eb565b6040516101bf9190611b68565b60405180910390f35b6101e260048036038101906101dd9190611b83565b61070b565b005b6101fe60048036038101906101f99190611b83565b61072c565b005b6102086107af565b005b610224600480360381019061021f9190611bef565b610837565b005b61022e6108d0565b60405161023b9190611c2b565b60405180910390f35b61025e60048036038101906102599190611c46565b6108f9565b60405161026b9190611c2b565b60405180910390f35b61028e60048036038101906102899190611b83565b610928565b60405161029b9190611a70565b60405180910390f35b6102ac610993565b6040516102b99190611b68565b60405180910390f35b6102ca61099a565b6040516102d79190611a70565b60405180910390f35b6102fa60048036038101906102f59190611c86565b6109ad565b005b61031660048036038101906103119190611b2c565b610acb565b6040516103239190611cc2565b60405180910390f35b61034660048036038101906103419190611b83565b610aef565b005b610362600480360381019061035d9190611c86565b610b10565b005b61036c610b96565b6040516103799190611b68565b60405180910390f35b61039c60048036038101906103979190611cdd565b610bba565b005b6103a6610cb2565b6040516103b39190611cc2565b60405180910390f35b3373ffffffffffffffffffffffffffffffffffffffff166103db6108d0565b73ffffffffffffffffffffffffffffffffffffffff16148061042a57506104297f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec610424610dc8565b610928565b5b610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046090611d67565b60405180910390fd5b600560009054906101000a900460ff166104b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104af90611dd3565b60405180910390fd5b6004548211156104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f490611e3f565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82846040518363ffffffff1660e01b815260040161055a929190611e5f565b602060405180830381600087803b15801561057457600080fd5b505af1158015610588573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ac9190611e9d565b505050565b60007f5a05180f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610624575061062382610dd0565b5b9050919050565b610633610dc8565b73ffffffffffffffffffffffffffffffffffffffff166106516108d0565b73ffffffffffffffffffffffffffffffffffffffff16146106a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069e90611f16565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000838152602001908152602001600020600101549050919050565b610714826106eb565b61071d81610e4a565b6107278383610e5e565b505050565b610734610dc8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079890611fa8565b60405180910390fd5b6107ab8282610e92565b5050565b6107b7610dc8565b73ffffffffffffffffffffffffffffffffffffffff166107d56108d0565b73ffffffffffffffffffffffffffffffffffffffff161461082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082290611f16565b60405180910390fd5b6108356000610ec6565b565b61083f610dc8565b73ffffffffffffffffffffffffffffffffffffffff1661085d6108d0565b73ffffffffffffffffffffffffffffffffffffffff16146108b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108aa90611f16565b60405180910390fd5b80600560006101000a81548160ff02191690831515021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006109208260026000868152602001908152602001600020610f8a90919063ffffffff16565b905092915050565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b600560009054906101000a900460ff1681565b80600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610a099190611c2b565b60206040518083038186803b158015610a2157600080fd5b505afa158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a599190611fdd565b1015610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190612056565b60405180910390fd5b610ac8600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16333084610fa4565b50565b6000610ae86002600084815260200190815260200160002061102d565b9050919050565b610af8826106eb565b610b0181610e4a565b610b0b8383610e92565b505050565b610b18610dc8565b73ffffffffffffffffffffffffffffffffffffffff16610b366108d0565b73ffffffffffffffffffffffffffffffffffffffff1614610b8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8390611f16565b60405180910390fd5b8060048190555050565b7f5d8e12c39142ff96d79d04d15d1ba1269e4fe57bb9d26f43523628b34ba108ec81565b610bc2610dc8565b73ffffffffffffffffffffffffffffffffffffffff16610be06108d0565b73ffffffffffffffffffffffffffffffffffffffff1614610c36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2d90611f16565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ca6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9d906120e8565b60405180910390fd5b610caf81610ec6565b50565b60045481565b610cc28282610928565b610d9457600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d39610dc8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000610dc0836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611042565b905092915050565b600033905090565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610e435750610e42826110b2565b5b9050919050565b610e5b81610e56610dc8565b61111c565b50565b610e688282610cb8565b610e8d8160026000858152602001908152602001600020610d9890919063ffffffff16565b505050565b610e9c82826111b9565b610ec1816002600085815260200190815260200160002061129b90919063ffffffff16565b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000610f9983600001836112cb565b60001c905092915050565b611027846323b872dd60e01b858585604051602401610fc593929190612108565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112f6565b50505050565b600061103b826000016113bd565b9050919050565b600061104e83836113ce565b6110a75782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506110ac565b600090505b92915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6111268282610928565b6111b55761114b8173ffffffffffffffffffffffffffffffffffffffff1660146113f1565b6111598360001c60206113f1565b60405160200161116a929190612251565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ac91906122d5565b60405180910390fd5b5050565b6111c38282610928565b156112975760006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061123c610dc8565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006112c3836000018373ffffffffffffffffffffffffffffffffffffffff1660001b61162d565b905092915050565b60008260000182815481106112e3576112e26122f7565b5b9060005260206000200154905092915050565b6000611358826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166117419092919063ffffffff16565b90506000815111156113b857808060200190518101906113789190611e9d565b6113b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ae90612398565b60405180910390fd5b5b505050565b600081600001805490509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b60606000600283600261140491906123e7565b61140e9190612441565b67ffffffffffffffff81111561142757611426612497565b5b6040519080825280601f01601f1916602001820160405280156114595781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611491576114906122f7565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106114f5576114f46122f7565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000600184600261153591906123e7565b61153f9190612441565b90505b60018111156115df577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611581576115806122f7565b5b1a60f81b828281518110611598576115976122f7565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806115d8906124c6565b9050611542565b5060008414611623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161a9061253c565b60405180910390fd5b8091505092915050565b6000808360010160008481526020019081526020016000205490506000811461173557600060018261165f919061255c565b9050600060018660000180549050611677919061255c565b90508181146116e6576000866000018281548110611698576116976122f7565b5b90600052602060002001549050808760000184815481106116bc576116bb6122f7565b5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b856000018054806116fa576116f9612590565b5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061173b565b60009150505b92915050565b60606117508484600085611759565b90509392505050565b60608247101561179e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161179590612631565b60405180910390fd5b6117a78561186d565b6117e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117dd9061269d565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161180f9190612704565b60006040518083038185875af1925050503d806000811461184c576040519150601f19603f3d011682016040523d82523d6000602084013e611851565b606091505b5091509150611861828286611890565b92505050949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606083156118a0578290506118f0565b6000835111156118b35782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118e791906122d5565b60405180910390fd5b9392505050565b600080fd5b6000819050919050565b61190f816118fc565b811461191a57600080fd5b50565b60008135905061192c81611906565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061195d82611932565b9050919050565b61196d81611952565b811461197857600080fd5b50565b60008135905061198a81611964565b92915050565b600080604083850312156119a7576119a66118f7565b5b60006119b58582860161191d565b92505060206119c68582860161197b565b9150509250929050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a05816119d0565b8114611a1057600080fd5b50565b600081359050611a22816119fc565b92915050565b600060208284031215611a3e57611a3d6118f7565b5b6000611a4c84828501611a13565b91505092915050565b60008115159050919050565b611a6a81611a55565b82525050565b6000602082019050611a856000830184611a61565b92915050565b6000611a9682611952565b9050919050565b611aa681611a8b565b8114611ab157600080fd5b50565b600081359050611ac381611a9d565b92915050565b600060208284031215611adf57611ade6118f7565b5b6000611aed84828501611ab4565b91505092915050565b6000819050919050565b611b0981611af6565b8114611b1457600080fd5b50565b600081359050611b2681611b00565b92915050565b600060208284031215611b4257611b416118f7565b5b6000611b5084828501611b17565b91505092915050565b611b6281611af6565b82525050565b6000602082019050611b7d6000830184611b59565b92915050565b60008060408385031215611b9a57611b996118f7565b5b6000611ba885828601611b17565b9250506020611bb98582860161197b565b9150509250929050565b611bcc81611a55565b8114611bd757600080fd5b50565b600081359050611be981611bc3565b92915050565b600060208284031215611c0557611c046118f7565b5b6000611c1384828501611bda565b91505092915050565b611c2581611952565b82525050565b6000602082019050611c406000830184611c1c565b92915050565b60008060408385031215611c5d57611c5c6118f7565b5b6000611c6b85828601611b17565b9250506020611c7c8582860161191d565b9150509250929050565b600060208284031215611c9c57611c9b6118f7565b5b6000611caa8482850161191d565b91505092915050565b611cbc816118fc565b82525050565b6000602082019050611cd76000830184611cb3565b92915050565b600060208284031215611cf357611cf26118f7565b5b6000611d018482850161197b565b91505092915050565b600082825260208201905092915050565b7f43616c6c6572206973206e6f7420612077697468647261776572000000000000600082015250565b6000611d51601a83611d0a565b9150611d5c82611d1b565b602082019050919050565b60006020820190508181036000830152611d8081611d44565b9050919050565b7f5769746864726177206973206e6f7420617661696c61626c6500000000000000600082015250565b6000611dbd601983611d0a565b9150611dc882611d87565b602082019050919050565b60006020820190508181036000830152611dec81611db0565b9050919050565b7f457863656564206d6178696d756d20616d6f756e740000000000000000000000600082015250565b6000611e29601583611d0a565b9150611e3482611df3565b602082019050919050565b60006020820190508181036000830152611e5881611e1c565b9050919050565b6000604082019050611e746000830185611c1c565b611e816020830184611cb3565b9392505050565b600081519050611e9781611bc3565b92915050565b600060208284031215611eb357611eb26118f7565b5b6000611ec184828501611e88565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611f00602083611d0a565b9150611f0b82611eca565b602082019050919050565b60006020820190508181036000830152611f2f81611ef3565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611f92602f83611d0a565b9150611f9d82611f36565b604082019050919050565b60006020820190508181036000830152611fc181611f85565b9050919050565b600081519050611fd781611906565b92915050565b600060208284031215611ff357611ff26118f7565b5b600061200184828501611fc8565b91505092915050565b7f496e73756666696369656e74206163636f756e742062616c616e636500000000600082015250565b6000612040601c83611d0a565b915061204b8261200a565b602082019050919050565b6000602082019050818103600083015261206f81612033565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006120d2602683611d0a565b91506120dd82612076565b604082019050919050565b60006020820190508181036000830152612101816120c5565b9050919050565b600060608201905061211d6000830186611c1c565b61212a6020830185611c1c565b6121376040830184611cb3565b949350505050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061218060178361213f565b915061218b8261214a565b601782019050919050565b600081519050919050565b60005b838110156121bf5780820151818401526020810190506121a4565b838111156121ce576000848401525b50505050565b60006121df82612196565b6121e9818561213f565b93506121f98185602086016121a1565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b600061223b60118361213f565b915061224682612205565b601182019050919050565b600061225c82612173565b915061226882856121d4565b91506122738261222e565b915061227f82846121d4565b91508190509392505050565b6000601f19601f8301169050919050565b60006122a782612196565b6122b18185611d0a565b93506122c18185602086016121a1565b6122ca8161228b565b840191505092915050565b600060208201905081810360008301526122ef818461229c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000612382602a83611d0a565b915061238d82612326565b604082019050919050565b600060208201905081810360008301526123b181612375565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006123f2826118fc565b91506123fd836118fc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612436576124356123b8565b5b828202905092915050565b600061244c826118fc565b9150612457836118fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561248c5761248b6123b8565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006124d1826118fc565b915060008214156124e5576124e46123b8565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000612526602083611d0a565b9150612531826124f0565b602082019050919050565b6000602082019050818103600083015261255581612519565b9050919050565b6000612567826118fc565b9150612572836118fc565b925082821015612585576125846123b8565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b600061261b602683611d0a565b9150612626826125bf565b604082019050919050565b6000602082019050818103600083015261264a8161260e565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000612687601d83611d0a565b915061269282612651565b602082019050919050565b600060208201905081810360008301526126b68161267a565b9050919050565b600081519050919050565b600081905092915050565b60006126de826126bd565b6126e881856126c8565b93506126f88185602086016121a1565b80840191505092915050565b600061271082846126d3565b91508190509291505056fea2646970667358221220af899db911773dac3c0edde1ce42db40b22e8367ef861d887f8d0081c5f7967264736f6c63430008090033";

type VaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vault__factory extends ContractFactory {
  constructor(...args: VaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Vault> {
    return super.deploy(overrides || {}) as Promise<Vault>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Vault {
    return super.attach(address) as Vault;
  }
  override connect(signer: Signer): Vault__factory {
    return super.connect(signer) as Vault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VaultInterface {
    return new utils.Interface(_abi) as VaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vault {
    return new Contract(address, _abi, signerOrProvider) as Vault;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
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
    name: "MAXIMUM_DELAY",
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
    name: "MINIMUM_DELAY",
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
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
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
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161116538038061116583398101604081905261002f9161014d565b60018110156100ab5760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d757360448201527f7420657863656564206d696e696d756d2064656c61792e00000000000000000060648201526084015b60405180910390fd5b620697808111156101245760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e000000000000000060648201526084016100a2565b600080546001600160a01b0319166001600160a01b039390931692909217909155600255610187565b6000806040838503121561016057600080fd5b82516001600160a01b038116811461017757600080fd5b6020939093015192949293505050565b610fcf806101966000396000f3fe6080604052600436106100d65760003560e01c80636a42b8f81161007f578063c1a287e211610059578063c1a287e21461020a578063e177246e14610221578063f2b0653714610241578063f851a4401461028157600080fd5b80636a42b8f8146101c85780637d645fab146101de578063b1b43ae5146101f557600080fd5b80633a66f901116100b05780633a66f9011461015a5780634dd18bf514610188578063591fcdfe146101a857600080fd5b80630825f38f146100e25780630e18b6811461010b578063267822471461012257600080fd5b366100dd57005b600080fd5b6100f56100f0366004610d5e565b6102a1565b6040516101029190610f06565b60405180910390f35b34801561011757600080fd5b5061012061067c565b005b34801561012e57600080fd5b50600154610142906001600160a01b031681565b6040516001600160a01b039091168152602001610102565b34801561016657600080fd5b5061017a610175366004610d5e565b610752565b604051908152602001610102565b34801561019457600080fd5b506101206101a3366004610d43565b610920565b3480156101b457600080fd5b506101206101c3366004610d5e565b6109ec565b3480156101d457600080fd5b5061017a60025481565b3480156101ea57600080fd5b5061017a6206978081565b34801561020157600080fd5b5061017a600181565b34801561021657600080fd5b5061017a6202a30081565b34801561022d57600080fd5b5061012061023c366004610e0f565b610b06565b34801561024d57600080fd5b5061027161025c366004610e0f565b60036020526000908152604090205460ff1681565b6040519015158152602001610102565b34801561028d57600080fd5b50600054610142906001600160a01b031681565b6000546060906001600160a01b031633146103295760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000060648201526084015b60405180910390fd5b60008686868686604051602001610344959493929190610eb9565b60408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff166103e15760405162461bcd60e51b815260206004820152603d60248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e0000006064820152608401610320565b8242101561047d5760405162461bcd60e51b815260206004820152604560248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d652060648201527f6c6f636b2e000000000000000000000000000000000000000000000000000000608482015260a401610320565b61048a836202a300610c9e565b4211156104ff5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e206973207374616c652e000000000000000000000000006064820152608401610320565b6000818152600360205260409020805460ff191690558451606090610525575083610551565b85805190602001208560405160200161053f929190610e54565b60405160208183030381529060405290505b600080896001600160a01b0316898460405161056d9190610e9d565b60006040518083038185875af1925050503d80600081146105aa576040519150601f19603f3d011682016040523d82523d6000602084013e6105af565b606091505b5091509150816106275760405162461bcd60e51b815260206004820152603d60248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20547260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006064820152608401610320565b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b6040516106679493929190610f19565b60405180910390a39998505050505050505050565b6001546001600160a01b031633146106fc5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e00000000000000006064820152608401610320565b600080543373ffffffffffffffffffffffffffffffffffffffff19918216811783556001805490921690915560405190917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b600080546001600160a01b031633146107d35760405162461bcd60e51b815260206004820152603660248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c60448201527f206d75737420636f6d652066726f6d2061646d696e2e000000000000000000006064820152608401610320565b6107e66002546107e04290565b90610c9e565b8210156108815760405162461bcd60e51b815260206004820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d75737420736174697360648201527f66792064656c61792e0000000000000000000000000000000000000000000000608482015260a401610320565b6000868686868660405160200161089c959493929190610eb9565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916600117905591506001600160a01b0388169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f9061090e908a908a908a908a90610f19565b60405180910390a39695505050505050565b3330146109955760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e00000000000000006064820152608401610320565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b03163314610a6c5760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000006064820152608401610320565b60008585858585604051602001610a87959493929190610eb9565b60408051601f19818403018152828252805160209182012060008181526003909252919020805460ff1916905591506001600160a01b0387169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610af6908990899089908990610f19565b60405180910390a3505050505050565b333014610b7b5760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527f6d652066726f6d2054696d656c6f636b2e0000000000000000000000000000006064820152608401610320565b6001811015610bf25760405162461bcd60e51b815260206004820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206560448201527f7863656564206d696e696d756d2064656c61792e0000000000000000000000006064820152608401610320565b62069780811115610c6b5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e00000000000000006064820152608401610320565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b6000610caa8284610f56565b9392505050565b600067ffffffffffffffff80841115610ccc57610ccc610fac565b604051601f8501601f19908116603f01168101908282118183101715610cf457610cf4610fac565b81604052809350858152868686011115610d0d57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114610d3e57600080fd5b919050565b600060208284031215610d5557600080fd5b610caa82610d27565b600080600080600060a08688031215610d7657600080fd5b610d7f86610d27565b945060208601359350604086013567ffffffffffffffff80821115610da357600080fd5b818801915088601f830112610db757600080fd5b610dc689833560208501610cb1565b94506060880135915080821115610ddc57600080fd5b508601601f81018813610dee57600080fd5b610dfd88823560208401610cb1565b95989497509295608001359392505050565b600060208284031215610e2157600080fd5b5035919050565b60008151808452610e40816020860160208601610f7c565b601f01601f19169290920160200192915050565b7fffffffff00000000000000000000000000000000000000000000000000000000831681528151600090610e8f816004850160208701610f7c565b919091016004019392505050565b60008251610eaf818460208701610f7c565b9190910192915050565b6001600160a01b038616815284602082015260a060408201526000610ee160a0830186610e28565b8281036060840152610ef38186610e28565b9150508260808301529695505050505050565b602081526000610caa6020830184610e28565b848152608060208201526000610f326080830186610e28565b8281036040840152610f448186610e28565b91505082606083015295945050505050565b60008219821115610f7757634e487b7160e01b600052601160045260246000fd5b500190565b60005b83811015610f97578181015183820152602001610f7f565b83811115610fa6576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea164736f6c6343000807000a";

export class Timelock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    admin_: string,
    delay_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

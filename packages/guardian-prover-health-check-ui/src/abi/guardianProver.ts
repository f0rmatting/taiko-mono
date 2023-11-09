export default [
  {
    inputs: [],
    name: "INVALID_GUARDIAN",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_GUARDIAN_SET",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_PAUSE_STATUS",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_PROOF",
    type: "error",
  },
  {
    inputs: [],
    name: "PROVING_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "REENTRANT_CALL",
    type: "error",
  },
  {
    inputs: [],
    name: "RESOLVER_DENIED",
    type: "error",
  },
  {
    inputs: [],
    name: "RESOLVER_INVALID_MANAGER",
    type: "error",
  },
  {
    inputs: [],
    name: "RESOLVER_UNEXPECTED_CHAINID",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainId",
        type: "uint64",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "RESOLVER_ZERO_ADDR",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "blockId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "approvalBits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "proofSubmitted",
        type: "bool",
      },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[5]",
        name: "",
        type: "address[5]",
      },
    ],
    name: "GuardiansUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
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
    name: "OwnershipTransferStarted",
    type: "event",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "NUM_GUARDIANS",
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
    name: "REQUIRED_GUARDIANS",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addressManager",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "approvals",
    outputs: [
      {
        internalType: "uint256",
        name: "approvalBits",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "l1Hash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "difficulty",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "blobHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "extraData",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "depositsHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "coinbase",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "id",
            type: "uint64",
          },
          {
            internalType: "uint32",
            name: "gasLimit",
            type: "uint32",
          },
          {
            internalType: "uint64",
            name: "timestamp",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "l1Height",
            type: "uint64",
          },
          {
            internalType: "uint24",
            name: "txListByteOffset",
            type: "uint24",
          },
          {
            internalType: "uint24",
            name: "txListByteSize",
            type: "uint24",
          },
          {
            internalType: "uint16",
            name: "minTier",
            type: "uint16",
          },
          {
            internalType: "bool",
            name: "blobUsed",
            type: "bool",
          },
        ],
        internalType: "struct TaikoData.BlockMetadata",
        name: "meta",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "parentHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "signalRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "graffiti",
            type: "bytes32",
          },
        ],
        internalType: "struct TaikoData.Transition",
        name: "tran",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "tier",
            type: "uint16",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct TaikoData.TierProof",
        name: "proof",
        type: "tuple",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guardian",
        type: "address",
      },
    ],
    name: "guardianIds",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "guardians",
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
        name: "_addressManager",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "pendingOwner",
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
        internalType: "uint64",
        name: "chainId",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "allowZeroAddress",
        type: "bool",
      },
    ],
    name: "resolve",
    outputs: [
      {
        internalType: "address payable",
        name: "addr",
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
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "allowZeroAddress",
        type: "bool",
      },
    ],
    name: "resolve",
    outputs: [
      {
        internalType: "address payable",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[5]",
        name: "_guardians",
        type: "address[5]",
      },
    ],
    name: "setGuardians",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

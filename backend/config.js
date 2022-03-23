const CONTACT_ADDRESS = '0x7915EeF039Ac5a1b7B76b029BceED7c5a603f6C8';

const CONTACT_ABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "name": "dladded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "name": "insuranceadded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "name": "pucadded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "bool",
            "name": "status",
            "type": "bool"
          }
        ],
        "name": "rcadded",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "verified",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dob",
            "type": "string"
          }
        ],
        "name": "registerUser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "testcontract",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "getId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_dochash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_validity",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_regDate",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_chassisNo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_engineNo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_model",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_seat",
            "type": "string"
          }
        ],
        "name": "add_rc",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_dochash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_validity",
            "type": "string"
          }
        ],
        "name": "add_driving",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_dochash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_validity",
            "type": "string"
          }
        ],
        "name": "add_puc",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_dochash",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_validity",
            "type": "string"
          }
        ],
        "name": "add_insurance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "setVerified",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "verify",
        "outputs": [
          {
            "internalType": "bool",
            "name": "ok",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_user_details",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_rc_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_puc_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_insurance_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "get_dl_details",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
];

module.exports = {
    CONTACT_ABI,
    CONTACT_ADDRESS
};
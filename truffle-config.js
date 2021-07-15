// require('dotenv').config();
// require('babel-register');
// require('babel-polyfill');

// const HDWalletProvider = require('@truffle/hdwallet-provider');

const infuraKey = "34f48847c90b4de7b5ef6e027a87ada9";
// const mnemonic = require('fs').readFileSync(".secret").toString().trim();
const privateKeys = ["c9ce7c66c3a3b2ecc6fb1f13555fc55947de3b0380bfc96258aafda203141ab3"]
module.exports = {

  
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      // gas: 0xfffffffffff,
      // gasPrice: 300000000
      // gasPrice: 160000000000
      // ganache-cli -l 3000000000
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    live:{
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      // host: "178.25.19.88", // Random IP for example purposes (do not use)
      // port: 80,
      gasPrice: 149000000000,
      network_id: 1,       // Ethereum public network
      networkCheckTimeout: 10000000
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraKey}`),
      network_id: 42,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
//   binanace testnet rpc url list
//     https://data-seed-prebsc-1-s1.binance.org:8545/
//     https://data-seed-prebsc-2-s1.binance.org:8545/ working in my case
//     https://data-seed-prebsc-1-s2.binance.org:8545/
//     https://data-seed-prebsc-2-s2.binance.org:8545/
//     https://data-seed-prebsc-1-s3.binance.org:8545/
//     https://data-seed-prebsc-2-s3.binance.org:8545/
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-2-s1.binance.org:8545/`),
      network_id: 97,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },
  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : { } // See options below
  },
  
 


  plugins: ['truffle-plugin-verify' ],
  api_keys: {
    etherscan: 'H65ZCU9JB731ASE9KNJHRQ92CVIPCNEQ7T',
    bscscan : '1E9TP6IEN2PJNEKPASN2RUIVWPQ2GD5EJT'
  },

  
   
};


    // "@truffle/hdwallet-provider": "^1.0.35",

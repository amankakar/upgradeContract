/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.7.3",
// };

// import "hardhat-deploy-ethers";
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');


module.exports = {
  solidity: {
    version: '0.8.2',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: './contracts',
  },
};

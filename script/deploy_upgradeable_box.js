const { ethers, upgrades } = require('hardhat');

async function main () {
  const StableCoin = await ethers.getContractFactory('MyToken');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(StableCoin);
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();
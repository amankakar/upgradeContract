const {upgrades, ethers} = require('hardhat');
const web3 = require('web3');

const { expect } = require("chai");
describe("Token contract", async function () {
    before('get Contracts' , async function(){
        this.StableCoin = await ethers.getContractFactory('MyToken');
         this.StableCoinv1 = await ethers.getContractFactory('MyTokenv1');
         this.hardhatToken = await upgrades.deployProxy(this.StableCoin, {kind: 'uups'});
         await this.hardhatToken.deployed();
         const [owner, rece] = await ethers.getSigners();
         this.owner = owner.address;
         this.rece = rece.address;

    
    })
  it("Deployment should assign the total supply of tokens to the owner : ", async function () {
    const name = await this.hardhatToken.name();
    await this.hardhatToken.transfer(this.rece ,1000 , {from : this.owner})
    expect(await this.hardhatToken.name()).to.equal(name);
  }
  );
  it("upgrades and check balance : " , async function(){
      this.hardhatTokenv1 = await upgrades.upgradeProxy(this.hardhatToken , this.StableCoinv1);
      await this.hardhatTokenv1.deployed();
      const bal = await this.hardhatTokenv1.balanceOf(this.rece);
      expect(bal.toNumber()).to.equal(1000);
      console.log("address1:" , this.hardhatTokenv1.address , "address 2:" , this.hardhatToken.address)
    const version = await this.hardhatTokenv1.version();
    console.log("version:" , version)
  })
});
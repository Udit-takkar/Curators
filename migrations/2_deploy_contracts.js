var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var TipCurators = artifacts.require("./Donation.sol");

module.exports = function (deployer) {
  // deployer.deploy(SimpleStorage);
  deployer.deploy(TipCurators);
};

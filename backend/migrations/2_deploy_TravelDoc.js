const TravelDoc = artifacts.require("./TravelDoc.sol");

module.exports = function (deployer) {
  deployer.deploy(TravelDoc);
};
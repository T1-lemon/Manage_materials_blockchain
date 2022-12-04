const ProductFactory = artifacts.require('ProductFactory');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(ProductFactory);
};

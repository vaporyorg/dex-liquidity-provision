const Contract = require("@truffle/contract")

module.exports = async function(deployer) {
  const BatchExchange = Contract(require("@gnosis.pm/dex-contracts/build/contracts/BatchExchange"))
  BatchExchange.setProvider(deployer.provider)
  BatchExchange.setNetwork(deployer.network_id)
  await BatchExchange.deployed()
}
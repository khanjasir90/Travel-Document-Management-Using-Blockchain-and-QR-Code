const Provider = require('./Provider')
const provider = new Provider()
const { CONTACT_ADDRESS, CONTACT_ABI } = require('./config')
class Contract {
  constructor() {
    this.web3 = provider.web3
  }
  // create contract instance
  initContract() {
    const instance = new this.web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS)
    return instance
  }
}
module.exports = Contract
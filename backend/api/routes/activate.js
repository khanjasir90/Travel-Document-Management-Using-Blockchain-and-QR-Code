const router = require("express").Router();
const Contract = require("../../Contract");
const Provider = require("../../Provider");
const contract = new Contract();
const provider = new Provider();
const web3 = provider.web3;
const instance = contract.initContract();

router.get("/", async (req, res, next) => {
  const accounts = await web3.eth.getAccounts();
  const boolStatus = await instance.methods.setVerified().call();
  console.log(boolStatus);
  if (!boolStatus) {
    return res.status(200).json({
      message: "Please Upload all Documents",
    });
  } else {
    return res.status(200).json({
      message: "QR-Code Activated",
      link: "http://localhost:5000/view/"+accounts[0],
    });
  }
});

module.exports = router;

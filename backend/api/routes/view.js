const router = require("express").Router();
const Contract = require("../../Contract");
const Provider = require("../../Provider");
const contract = new Contract();
const provider = new Provider();
const web3 = provider.web3;
const instance = contract.initContract();

router.get("/:account_id", async (req, res, next) => {
  console.log(req.params.account_id);
  const id = await instance.methods.getId().call();
  const userDetails = await instance.methods.get_user_details(id).call();
  console.log(userDetails);
  const rcDetails = await instance.methods.get_rc_details(id).call();
  console.log(rcDetails);
  const pucDetails = await instance.methods.get_puc_details(id).call();
  console.log(pucDetails);
  const insuranceDetails = await instance.methods
    .get_insurance_details(id)
    .call();
  console.log(insuranceDetails);
  return res.status(200).json({
    userDetails: userDetails,
    rcDetails: rcDetails,
    pucDetails: pucDetails,
    insuranceDetails: insuranceDetails,
  });
});

module.exports = router;

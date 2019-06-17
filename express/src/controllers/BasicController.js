const BasicService = require("../services/BasicService");
const BasicValidator = require("../validator/BasicValidator");

const getBasic = async (req, res) => {
  const basic = await BasicService.getBasic();
  return res.json(basic);
};

module.exports = {
  getBasic
};

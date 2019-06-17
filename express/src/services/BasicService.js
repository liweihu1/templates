const Basic = require("../models/BasicModel");

// Finds every result and returns it.
const getBasic = async () => Basic.find().exec();

module.exports = {
  getBasic
};

const basicController = require("../controllers/BasicController");
const asyncMiddleware = require("../config/middleware/Async");
const express = require("express");
const router = express.Router();

router.get("/", asyncMiddleware(basicController.getBasic));

module.export = router;

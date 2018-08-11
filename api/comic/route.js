const router = require('express').Router();
const controller = require("./controller");

router.get("/get", controller.getComics);
module.exports = router;
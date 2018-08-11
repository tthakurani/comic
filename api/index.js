const router = require('express').Router();
const comicRoutes = require("./comic/route");
router.use('/comic', comicRoutes)
module.exports = router
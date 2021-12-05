const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
//home routes will use /
router.use("/", homeRoutes);
// api routes will use /api
router.use("/api", apiRoutes);

module.exports = router;

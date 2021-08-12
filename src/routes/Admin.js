const router = require("express").Router();
const adminController = require("../controller/Admin.controller");
const { auth } = require("../utils/middlewares");

router.route("/:adminId").get( adminController.show);
router.route("/adminDelete").delete(adminController.destroy);
router.route("/create").post(adminController.create);
router.route("/signin").post(adminController.signin);

module.exports = router;

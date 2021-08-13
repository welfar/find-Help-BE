const router = require("express").Router();
const adminController = require("../controller/Admin.controller");
const { auth } = require("../utils/middlewares");

router.route("/create").post(adminController.create);
router.route("/signin").post(adminController.signin);
router.route("/adminList").get(adminController.list);
router.route("/:adminId").get(adminController.show);
router.route("/:adminId").delete(adminController.destroy);

module.exports = router;

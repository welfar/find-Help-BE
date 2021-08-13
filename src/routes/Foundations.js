const router = require("express").Router();
const foundationsController = require("../controller/Foundations.controller");
const { formData } = require("../utils/middlewares");

router.route("/create").post(foundationsController.create);
router.route("/foundationsList").get(foundationsController.list);
router.route("/:foundationsId").get(foundationsController.show);
router.route("/foundationsProfilePic").put(formData, foundationsController.update);
router.route("/:foundationsId").put(foundationsController.update);
router.route("/:foundationsId").delete(foundationsController.destroy);

module.exports = router;

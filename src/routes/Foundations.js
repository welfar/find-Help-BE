const router = require("express").Router();
const foundationsController = require("../controller/Foundations.controller");
const { formData } = require("../utils/middlewares");

router.route("/create").post(foundationsController.create);
router.route("/foundationsList").get(foundationsController.list);
router.route("/foundationsInfo").get(foundationsController.show);
router.route("/foundationsProfilePic").put(formData, foundationsController.updatePic);
router.route("/foundationUpdate").put(foundationsController.update);
router.route("/foundationDelete").delete(foundationsController.destroy);

module.exports = router;

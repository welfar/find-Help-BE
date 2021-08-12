const router = require("express").Router();
const newsController = require("../controller/News.controller");
const { formData } = require("../utils/middlewares");

router.route("/create").post(formData, newsController.create);
router.route("/newsList").get(newsController.list);
router.route("/delete").delete(newsController.destroy);

module.exports = router;
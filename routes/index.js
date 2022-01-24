const Router = require("@koa/router");
const controller = require("../controllers/crypto.controller");

const router = new Router({ prefix: "/api" });

router.get("/", controller.getTopCoins);
router.get("/news", controller.getNews);

module.exports = router;

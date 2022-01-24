const Koa = require("koa");
const { success, info, error } = require("consola");
const rootRouter = require("./routes");

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.listen(port, (e) => {
  if (e) return error(e);
  info({
    message: `Server started at port ${port}`,
    badge: true,
  });
});

import express from "express";
import homeControler from "../controllers/homeControler";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeControler.getHomePage);
  router.get("/about", homeControler.getAboutPage);

  return app.use("/", router);
};

module.exports = initWebRoutes;

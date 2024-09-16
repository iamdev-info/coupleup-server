"use strict";

/*all imports */
import express from "express";
import * as morgan from "./utils/logger/morgan";
import helmet from "helmet";
import routes from "./routes";
import mongo from "./utils/mongo";
import cors from "./middlewares/cors";
import genericErrorHandler from "./middlewares/genericErrorHandler";
import notFoundErrorHandler from "./middlewares/notFoundErrorHandler";
import bodyParser from "body-parser";
require("dotenv").config();

/* instanciate app */
const app = express();

/* set options */
app.set('baseUrl', process.env.NODE_BASE_URL || 'http://localhost')
app.set("port", process.env.PORT || 8080);
app.set("env", process.env.NODE_ENV || "dev");

/* set loggers */
if (app.get("env") !== "test") {
  app.use(morgan.errorLogging);
  app.use(morgan.successLogging);
}

/* initialise MongoDB connection */
// mongo.init();

/* initialize middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors);
app.use(bodyParser.json())

/* initialise API routes */
app.use("/api", routes);

/* error middlewares */
app.use(genericErrorHandler);
app.use(notFoundErrorHandler);


export default app;

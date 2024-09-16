import * as mongoose from "mongoose";

require("dotenv").config();

// Mongo options
const options = {
  useNewUrlParser: true,
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
};

/**
 * initialise mongoDB connection
 */
const init = () => {
  /* connect */
  mongoose.connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    options,
  );
};

export default {
  init,
};

import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import db from "./utils/db";

async function init() {
  try {
    const result = await db();
    console.log("database status: ", result);
    const app = express();

    app.use(bodyParser.json());
    app.use("/api", router);

    const port = 3000;

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();

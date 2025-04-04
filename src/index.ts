import express from "express";
import bodyParser from "body-parser";
import router from "./routes/api";
import db from "./utils/db";
import docs from "./docs/route";
import cors from "cors";

async function init() {
  try {
    const result = await db();
    console.log("database status: ", result);
    const app = express();

    // middleware
    app.use(cors());
    app.use(bodyParser.json());

    app.use("/api", router);

    const PORT = 3000;

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Server is running",
        data: null,
      });
    });

    docs(app);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();

import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { router } from "./routes";
const app = express();

dotenv.config();

app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});

app.use(express.json({ limit: "200mb" }));

app.use(router);

export { app };

app.listen(process.env.PORT, async () => {
   // await console.log(`🚀 Server started on port:${process.env.PORT}`);
});

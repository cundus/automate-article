import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(router);

app.get("/", (req: Request, res: Response) => {
   res.send("Hello World!");
});

export default app;

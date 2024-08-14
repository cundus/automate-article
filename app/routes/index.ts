import { Router } from "express";
import bookRouter from "./BookRoutes";
import { swaggerSpec, swaggerUI } from "../middlewares/swagger";

const router = Router();

router.use("/book", bookRouter);
router.use("/api-docs", swaggerUI.serve);
router.get("/api-docs", swaggerUI.setup(swaggerSpec));

export default router;

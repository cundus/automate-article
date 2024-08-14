import * as bookController from "../controllers/BookController";
import { Router } from "express";

const bookRouter = Router();

/**
 * @swagger
 * /book/create-layout:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
bookRouter.post("/create-layout", bookController.firstLayout);

export default bookRouter;

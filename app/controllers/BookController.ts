import { Request, Response } from "express";
import * as BookServices from "../services/BookServices";

export const firstLayout = async (req: Request, res: Response) => {
   try {
      const title = req.body.title;
      const aiResp = await BookServices.generateBookLayout(title);

      res.status(200).json({
         message: "success",
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
   }
};

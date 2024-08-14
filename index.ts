import dotenv from "dotenv";
dotenv.config({
   path: "./.env",
});
import app from "./app/server";

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});

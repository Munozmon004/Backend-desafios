import express, { json } from "express";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(3000,() => {
    console.log("Running on port 3000");
});
import express from "express";
import { router as shortner_router } from "./routers/shortner.router";
import connectDB from "./index";
import dotenv from "dotenv";

const app = express();
const port = 4000;

connectDB();

app.use(express.json());

app.get("/ping", (req, res) => {
	res.send("pong");
});

app.use("/shortner", shortner_router);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";

//import routes
import userRoutes from "./routes/goalRoutes.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use("/api/goals", userRoutes);

app.listen(port, () => {
	console.log(`Running on ${port}`);
});
